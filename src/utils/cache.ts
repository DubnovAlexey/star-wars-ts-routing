// ФАЙЛ: cache.ts. НАЗНАЧЕНИЕ: недоверенный и необязательный кеш демонстрационных данных.
// РАЗДЕЛЫ: 1. Контракты; 2. Проверка и чтение; 3. Сохранение без срыва интерфейса.
export type HeroInfo = Record<string, string | number>;
type StorageLike = Pick<Storage, 'getItem' | 'setItem'>;

// НАЧАЛО ФУНКЦИИ isHeroInfo
export function isHeroInfo(value: unknown): value is HeroInfo {
  return !!value && typeof value === 'object' && !Array.isArray(value) &&
    Object.keys(value).length > 0 && Object.keys(value).length <= 20 &&
    Object.values(value).every(item => typeof item === 'string' || typeof item === 'number' && Number.isFinite(item));
}
// КОНЕЦ ФУНКЦИИ isHeroInfo
export const isPlanetList = (value: unknown): value is string[] => Array.isArray(value) && value.length > 0 &&
  value.length <= 500 && value.every(item => typeof item === 'string' && item.length > 0 && item.length <= 200);

// НАЧАЛО ФУНКЦИИ readCache
/** Хранилище может быть запрещено в приватном режиме или встроенном окне. */
export function readCache<T>(key: string, maxAge: number, valid: (value: unknown) => value is T,
  stamp: 'timestamp' | 'time' = 'timestamp', store?: StorageLike, now = Date.now()): T | undefined {
  try {
    const entry = JSON.parse((store ?? localStorage).getItem(key) ?? 'null');
    const age = now - entry?.[stamp];
    if (entry && typeof entry[stamp] === 'number' && Number.isFinite(age) && age >= 0 && age < maxAge && valid(entry.payload)) return entry.payload;
  } catch { /* Недоступный или испорченный кеш не блокирует загрузку. */ }
}
// КОНЕЦ ФУНКЦИИ readCache

// НАЧАЛО ФУНКЦИИ writeCache
export function writeCache(key: string, value: unknown, store?: StorageLike): boolean {
  try { (store ?? localStorage).setItem(key, JSON.stringify(value)); return true; }
  catch { return false; }
}
// КОНЕЦ ФУНКЦИИ writeCache

// НАЧАЛО ФУНКЦИИ isOpeningText
/** Старые строковые значения undefined/null не считаются сохранённым вступлением. */
export function isOpeningText(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= 10000 &&
    value !== 'undefined' && value !== 'null';
}
// КОНЕЦ ФУНКЦИИ isOpeningText
