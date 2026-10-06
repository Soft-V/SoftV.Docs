export type Source = {id: number; title: string; url: string};
export type Event = {type: string; text?: string; status?: string; position?: number; sources?: Source[]; code?: string};
export class AssistantError extends Error {
  constructor(public code: string) { super(code); }
}

export async function explain(apiUrl: string, body: unknown, signal: AbortSignal, onEvent: (event: Event) => void) {
  const idle = new AbortController();
  let timer: ReturnType<typeof setTimeout>;
  const reset = () => { clearTimeout(timer); timer = setTimeout(() => idle.abort(), 35000); };
  const controller = new AbortController();
  const abort = () => controller.abort();
  signal.addEventListener('abort', abort, {once: true});
  idle.signal.addEventListener('abort', abort, {once: true});
  if (signal.aborted) controller.abort();
  reset();
  let reader: ReadableStreamDefaultReader<Uint8Array> | undefined;
  try {
    const response = await fetch(`${apiUrl.replace(/\/$/, '')}/explain`, {
      method: 'POST', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body), signal: controller.signal, credentials: 'omit',
    });
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new AssistantError(error.code || 'unavailable');
    }
    if (!response.headers.get('content-type')?.includes('application/x-ndjson') || !response.body) throw new AssistantError('unavailable');
    reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let complete = false;
    const line = (value: string) => {
      if (!value.trim()) return;
      const event: Event = JSON.parse(value);
      if (event.type === 'error') throw new AssistantError(event.code || 'unavailable');
      if (event.type === 'done') complete = true;
      onEvent(event);
    };
    while (true) {
      const {value, done} = await reader.read();
      reset();
      if (done) break;
      buffer += decoder.decode(value, {stream: true});
      let end: number;
      while ((end = buffer.indexOf('\n')) >= 0) {
        line(buffer.slice(0, end));
        buffer = buffer.slice(end + 1);
      }
      if (buffer.length > 128000) throw new AssistantError('unavailable');
    }
    buffer += decoder.decode();
    line(buffer);
    if (!complete) throw new AssistantError('unavailable');
  } catch (error) {
    if (idle.signal.aborted && !signal.aborted) throw new AssistantError('timeout');
    throw error;
  } finally {
    clearTimeout(timer!);
    await reader?.cancel().catch(() => {});
    signal.removeEventListener('abort', abort);
    idle.signal.removeEventListener('abort', abort);
  }
}
