const en = {
  title: 'Documentation assistant', launch: 'Ask the assistant', explain: 'Explain with AI',
  close: 'Close assistant', selection: 'Selected passage', placeholder: 'Ask a follow-up question…',
  send: 'Send', stop: 'Stop', retry: 'Try again', sources: 'Related documentation',
  welcome: 'Select a passage in the documentation to explain it, or ask a question about this page.',
  question: 'Explain the selected passage in simple terms.',
  generating: 'Preparing an explanation…', queued: 'Waiting in the queue. Position:',
  unavailable: 'The assistant is temporarily unavailable. Please try again later.',
  busy: 'The assistant is busy. Please try again shortly.',
  limited: 'Too many requests. Please wait a minute and try again.',
  timeout: 'The request took too long. Please try again.',
  stopped: 'Response stopped.', note: 'AI answers may contain mistakes. Check the documentation.',
};
const ru: typeof en = {
  title: 'Нейропомощник', launch: 'Спросить помощника', explain: 'Объяснить с нейропомощником',
  close: 'Закрыть помощника', selection: 'Выделенный фрагмент', placeholder: 'Задайте уточняющий вопрос…',
  send: 'Отправить', stop: 'Остановить', retry: 'Попробовать ещё', sources: 'Найденные разделы',
  welcome: 'Выделите фрагмент документации, чтобы объяснить его, или задайте вопрос об этой странице.',
  question: 'Объясни выделенный фрагмент простыми словами.',
  generating: 'Готовлю объяснение…', queued: 'Ожидание в очереди. Ваша позиция:',
  unavailable: 'Нейропомощник пока недоступен. Попробуйте чуть позже.',
  busy: 'Нейропомощник сейчас занят. Попробуйте чуть позже.',
  limited: 'Слишком много запросов. Подождите минуту и попробуйте снова.',
  timeout: 'Не удалось дождаться ответа. Попробуйте ещё раз.',
  stopped: 'Ответ остановлен.', note: 'В ответах ИИ возможны ошибки. Сверяйтесь с документацией.',
};
const zh: typeof en = {
  title: '文档助手', launch: '询问助手', explain: '用 AI 解释',
  close: '关闭助手', selection: '所选文本', placeholder: '继续提问…',
  send: '发送', stop: '停止', retry: '重试', sources: '相关文档',
  welcome: '选择文档中的一段文字来获取解释，或就当前页面提问。',
  question: '请用简单易懂的语言解释所选文本。',
  generating: '正在准备解释…', queued: '正在排队，当前位置：',
  unavailable: '助手暂时不可用，请稍后再试。', busy: '助手正忙，请稍后再试。',
  limited: '请求过多，请稍等一分钟后重试。', timeout: '等待回复超时，请重试。',
  stopped: '回复已停止。', note: 'AI 回答可能有误，请核对文档。',
};
export function messages(locale: string) { return locale === 'ru' ? ru : locale === 'zh-Hans' ? zh : en; }
