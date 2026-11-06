// ФАЙЛ: request.ts. НАЗНАЧЕНИЕ: отменяемый GET с ограничением ожидания.
// РАЗДЕЛЫ: 1. Связь родительской отмены; 2. Ответ и обязательная очистка таймера.

// НАЧАЛО ФУНКЦИИ fetchJson
/** Поздний ответ и таймер старого запроса не влияют на новый экран. */
export async function fetchJson(url: string, signal: AbortSignal, request: typeof fetch = fetch,
  timeoutMs = 12000): Promise<unknown> {
  if (signal.aborted) throw signal.reason ?? new DOMException('Request cancelled', 'AbortError');
  const controller = new AbortController();
  const cancel = () => controller.abort(signal.reason);
  signal.addEventListener('abort', cancel, {once:true});
  const deadline = setTimeout(() => controller.abort(), Math.max(1, Math.min(60000,
    Number.isFinite(timeoutMs) ? timeoutMs : 12000)));
  try {
    const response = await request(url, {signal:controller.signal});
    if (!response.ok) throw new Error(`The data service is unavailable (${response.status}). Try again later.`);
    const result: unknown = await response.json();
    if (controller.signal.aborted) throw controller.signal.reason;
    return result;
  } catch (error) {
    if (signal.aborted) throw signal.reason ?? new DOMException('Request cancelled', 'AbortError');
    if (controller.signal.aborted) throw new Error('The data request timed out. Please try again.');
    throw error;
  } finally {
    clearTimeout(deadline);
    signal.removeEventListener('abort', cancel);
  }
}
// КОНЕЦ ФУНКЦИИ fetchJson
