// ФАЙЛ: OpeningCrawl.tsx. НАЗНАЧЕНИЕ: текст вступления с необязательным кешем сессии.
// РАЗДЕЛЫ: 1. Кеш; 2. Отменяемая загрузка.
import {fetchJson} from '../utils/request.ts';
import {useEffect, useState} from 'react';
import {base_url, storage_prefix} from '../utils/constants.ts';
import {isOpeningText} from '../utils/cache.ts';
import Text from './ui/Text.tsx';
const KEY = storage_prefix + 'opening-crawl';
function cachedOpening(): string | null {
  try {
    const text = sessionStorage.getItem(KEY) ?? sessionStorage.getItem('opening_crawl');
    return isOpeningText(text) ? text : null;
  } catch { return null; }
}
// НАЧАЛО ФУНКЦИИ OpeningCrawl
const OpeningCrawl = () => {
  const [openingCrawl, setOpeningCrawl] = useState(cachedOpening);
  useEffect(() => {
    if (openingCrawl) return;
    const controller = new AbortController();
    const episode = Math.floor(Math.random() * 6) + 1;
    fetchJson(`${base_url}/v1/films/${episode}`, controller.signal)
      .then(data => {
        if (!data || typeof data !== 'object' || !('opening_crawl' in data) || !isOpeningText(data.opening_crawl)) throw new Error('Invalid opening crawl');
        if (controller.signal.aborted) return;
        try { sessionStorage.setItem(KEY, data.opening_crawl); } catch { /* Текст доступен и без хранилища. */ }
        setOpeningCrawl(data.opening_crawl);
      })
      .catch(() => { if (!controller.signal.aborted) setOpeningCrawl('The opening crawl is unavailable. Please try again later.'); });
    return () => controller.abort();
  }, [openingCrawl]);
  return <Text>{openingCrawl || 'Loading...'}</Text>;
};
// КОНЕЦ ФУНКЦИИ OpeningCrawl
export default OpeningCrawl;
