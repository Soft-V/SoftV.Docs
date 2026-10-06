import React, {useEffect, useRef, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ReactMarkdown from 'react-markdown';
import {AssistantError, explain, Source} from './client';
import {messages} from './messages';
import styles from './styles.module.css';

type Passage = {selection: string; context: string; pageTitle: string; pagePath: string};
type Turn = {role: 'user' | 'assistant'; content: string; sources?: Source[]; complete?: boolean};
type SelectionButton = {passage: Passage; x: number; y: number};

export default function DocAssistant() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const location = useLocation();
  const locale = i18n.currentLocale;
  const t = messages(locale);
  const apiUrl = String(siteConfig.customFields?.assistantApiUrl || '/docshome/assistant-api');
  const [isDoc, setIsDoc] = useState(false);
  const [selectionButton, setSelectionButton] = useState<SelectionButton | null>(null);
  const [open, setOpen] = useState(false);
  const [passage, setPassage] = useState<Passage | null>(null);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [question, setQuestion] = useState('');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [lastQuestion, setLastQuestion] = useState('');
  const current = useRef<AbortController | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const scroll = useRef<HTMLDivElement>(null);

  const pagePassage = (): Passage => {
    const article = document.querySelector<HTMLElement>('.theme-doc-markdown');
    return {selection: '', context: article?.innerText.slice(0, 1800) || '',
      pageTitle: document.querySelector('article h1')?.textContent?.slice(0, 300) || document.title.slice(0, 300),
      pagePath: window.location.pathname};
  };

  useEffect(() => {
    current.current?.abort();
    current.current = null;
    setOpen(false); setTurns([]); setBusy(false); setError(''); setPassage(null); setSelectionButton(null); setQuestion('');
    setIsDoc(Boolean(document.querySelector('.theme-doc-markdown')));
    let timer: ReturnType<typeof setTimeout>;
    const updateSelection = () => {
      const selection = window.getSelection();
      const article = document.querySelector('.theme-doc-markdown');
      const text = selection?.toString().trim() || '';
      if (!selection?.rangeCount || text.length < 2 || !article?.contains(selection.anchorNode) || !article.contains(selection.focusNode)) {
        setSelectionButton(null); return;
      }
      const rect = selection.getRangeAt(0).getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) { setSelectionButton(null); return; }
      const element = selection.anchorNode?.nodeType === Node.ELEMENT_NODE
        ? selection.anchorNode as Element : selection.anchorNode?.parentElement;
      const surrounding = element?.closest('p, pre, li, td, section') as HTMLElement | null;
      const codeLanguage = element?.closest('pre')?.className.match(/\blanguage-([\w+-]+)/)?.[1];
      setSelectionButton({
        passage: {...pagePassage(), selection: text.slice(0, 3000),
          context: `${codeLanguage ? `Code language: ${codeLanguage}\n` : ''}${surrounding?.innerText || ''}`.slice(0, 2000)},
        x: Math.max(12, Math.min(rect.left, window.innerWidth - 320)),
        y: Math.max(64, Math.min(rect.bottom + 10, window.innerHeight - 55)),
      });
    };
    const schedule = () => { clearTimeout(timer); timer = setTimeout(updateSelection, 100); };
    const hide = () => setSelectionButton(null);
    document.addEventListener('selectionchange', schedule);
    document.addEventListener('pointerup', schedule);
    window.addEventListener('scroll', hide, true);
    window.addEventListener('resize', hide);
    return () => {
      clearTimeout(timer); current.current?.abort();
      document.removeEventListener('selectionchange', schedule);
      document.removeEventListener('pointerup', schedule);
      window.removeEventListener('scroll', hide, true);
      window.removeEventListener('resize', hide);
    };
  }, [location.pathname, locale]);

  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') close(); };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open]);

  useEffect(() => {
    const element = scroll.current;
    if (element && element.scrollHeight - element.scrollTop - element.clientHeight < 220) element.scrollTop = element.scrollHeight;
  }, [turns, status, error]);

  function close() {
    current.current?.abort();
    current.current = null;
    setBusy(false); setOpen(false); setStatus('');
    previousFocus.current?.focus();
  }

  async function ask(text: string, target: Passage, history: Turn[]) {
    current.current?.abort();
    const controller = new AbortController();
    current.current = controller;
    setBusy(true); setError(''); setStatus(t.generating); setLastQuestion(text); setQuestion('');
    const base: Turn[] = [...history, {role: 'user', content: text}];
    let answer = '';
    let sources: Source[] = [];
    setTurns([...base, {role: 'assistant', content: ''}]);
    try {
      await explain(apiUrl, {...target, locale, question: text,
        history: history.filter(turn => turn.role === 'user' || turn.complete).slice(-6)
          .map(({role, content}) => ({role, content: content.slice(0, 1600)}))}, controller.signal, event => {
        if (current.current !== controller) return;
        if (event.type === 'status') setStatus(event.status === 'queued' ? `${t.queued} ${event.position}` : t.generating);
        if (event.type === 'sources') sources = event.sources || [];
        if (event.type === 'token') { answer += event.text || ''; setStatus(''); }
        if (event.type === 'sources' || event.type === 'token' || event.type === 'done') {
          setTurns([...base, {role: 'assistant', content: answer, sources, complete: event.type === 'done'}]);
        }
      });
    } catch (failure) {
      if (current.current !== controller) return;
      if (controller.signal.aborted) setError(t.stopped);
      else {
        const code = failure instanceof AssistantError ? failure.code : 'unavailable';
        setError(code === 'rate_limited' ? t.limited : code === 'busy' ? t.busy
          : ['timeout', 'queue_timeout'].includes(code) ? t.timeout : t.unavailable);
      }
    } finally {
      if (current.current === controller) { setBusy(false); setStatus(''); current.current = null; }
    }
  }

  function show(selected?: Passage) {
    previousFocus.current = document.activeElement as HTMLElement;
    setOpen(true); setSelectionButton(null);
    window.getSelection()?.removeAllRanges();
    if (selected) {
      setPassage(selected); setTurns([]);
      void ask(t.question, selected, []);
    } else if (!passage) setPassage(pagePassage());
  }

  function retry() {
    if (passage && lastQuestion) void ask(lastQuestion, passage, turns.slice(0, -2));
  }

  function sourceHref(source: Source) {
    // The API returns canonical multilingual paths. A single-locale dev server
    // may use a different baseUrl, so resolve doc routes against this build.
    const match = source.url.match(/^\/(?!\/)[^?#]*\/docs\/(.*)$/);
    return match ? `${siteConfig.baseUrl}docs/${match[1]}` : undefined;
  }

  if (!isDoc) return null;
  return <>
    {!open && <button className={styles.launcher} onClick={() => show()} aria-haspopup="dialog">✦ {t.launch}</button>}
    {selectionButton && <button className={styles.selectionButton}
      style={{left: selectionButton.x, top: selectionButton.y}}
      onMouseDown={event => event.preventDefault()} onClick={() => show(selectionButton.passage)}>
      ✦ {t.explain}
    </button>}
    {open && <aside className={styles.panel} role="dialog" aria-modal="false" aria-labelledby="assistant-title">
      <header className={styles.header}>
        <div><span className={styles.eyebrow}>SOFT V · AI</span><h2 id="assistant-title">{t.title}</h2></div>
        <button ref={closeButton} className={styles.close} onClick={close} aria-label={t.close}>×</button>
      </header>
      {passage?.selection && <details className={styles.selection}>
        <summary>{t.selection}</summary><blockquote>{passage.selection}</blockquote>
      </details>}
      <div ref={scroll} className={styles.conversation} aria-busy={busy}>
        {!turns.length && <p className={styles.welcome}>{t.welcome}</p>}
        {turns.map((turn, index) => <div key={index} className={turn.role === 'user' ? styles.userMessage : styles.answer}>
          {turn.role === 'user' ? turn.content : <ReactMarkdown skipHtml components={{
            a: ({children}) => <span>{children}</span>,
            img: ({alt}) => <span>{alt}</span>,
          }}>{turn.content}</ReactMarkdown>}
          {turn.complete && Boolean(turn.sources?.length) && <div className={styles.sources}>
            <span>{t.sources}</span>
            {turn.sources!.filter(source => sourceHref(source)).map(source =>
              <a key={source.id} href={sourceHref(source)}>[{source.id}] {source.title}</a>)}
          </div>}
        </div>)}
        {status && <p className={styles.status} role="status">{status}</p>}
        {error && <div className={styles.error} role="alert"><p>{error}</p>
          <button onClick={retry} disabled={busy}>{t.retry}</button>
        </div>}
      </div>
      <form className={styles.composer} onSubmit={event => {
        event.preventDefault();
        if (question.trim() && passage && !busy) void ask(question.trim(), passage, turns);
      }}>
        <textarea value={question} onChange={event => setQuestion(event.target.value)} maxLength={1200}
          rows={2} placeholder={t.placeholder} aria-label={t.placeholder} disabled={busy}
          onKeyDown={event => {
            if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
              event.preventDefault(); event.currentTarget.form?.requestSubmit();
            }
          }} />
        {busy ? <button type="button" onClick={() => current.current?.abort()}>{t.stop}</button>
          : <button type="submit" disabled={!question.trim()}>{t.send}</button>}
      </form>
      <p className={styles.note}>{t.note}</p>
    </aside>}
  </>;
}
