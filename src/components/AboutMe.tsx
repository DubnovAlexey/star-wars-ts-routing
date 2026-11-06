// ФАЙЛ: AboutMe.tsx. НАЗНАЧЕНИЕ: страница выбранного героя с отменяемой загрузкой.
// РАЗДЕЛЫ: 1. Поля и кеш; 2. Смена маршрута; 3. Загрузка и представление.
import {fetchJson} from '../utils/request.ts';
import {characters, defaultHero, period_month, storage_prefix} from '../utils/constants.ts';
import {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router';
import ErrorPage from './ErrorPage.tsx';
import {SWContext} from '../utils/context.ts';
import {isHeroInfo, readCache, writeCache, type HeroInfo as HeroDetails} from '../utils/cache.ts';

const personFields = ['name','gender','birth_year','height','mass','hair_color','skin_color','eye_color'];
const transportFields = ['name','model','manufacturer','length','crew','passengers','max_atmosphering_speed','cargo_capacity'];
const cachedHero = (id: string) => readCache(storage_prefix + id, period_month, isHeroInfo);

// НАЧАЛО ФУНКЦИИ AboutMe
const AboutMe = () => {
  const {heroId = defaultHero} = useParams();
  return <HeroInfo key={heroId} heroId={heroId}/>;
};
// КОНЕЦ ФУНКЦИИ AboutMe

// НАЧАЛО ФУНКЦИИ HeroInfo
const HeroInfo = ({heroId}: {heroId: string}) => {
  const known = Object.prototype.hasOwnProperty.call(characters, heroId);
  const {changeHero} = useContext(SWContext);
  const [hero, setHero] = useState<HeroDetails | undefined>(() => known ? cachedHero(heroId) : undefined);
  useEffect(() => {
    if (!known) return;
    changeHero(heroId);
    if (cachedHero(heroId)) return;
    const controller = new AbortController();
    fetchJson(characters[heroId].url, controller.signal)
      .then(data => {
        if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('Invalid hero data');
        const source = data as Record<string, unknown>;
        const fields = characters[heroId].url.includes('/transports/') ? transportFields : personFields;
        const info = Object.fromEntries(fields.map(field => [field,
          typeof source[field] === 'string' || typeof source[field] === 'number' && Number.isFinite(source[field]) ? source[field] : 'unknown'])) as HeroDetails;
        if (controller.signal.aborted) return;
        writeCache(storage_prefix + heroId, {payload:info,timestamp:Date.now()});
        setHero(info);
      })
      .catch(() => { if (!controller.signal.aborted) setHero({status:'The Star Wars data server is not answering. Try again later.'}); });
    return () => controller.abort();
  }, [heroId, known, changeHero]);
  if (!known) return <ErrorPage/>;
  return <div className="text-[2em] text-justify tracking-widest leading-14 ml-8" aria-live="polite">
    {hero ? Object.entries(hero).map(([key,value]) => <p key={key}><span className="text-3xl capitalize">{key.replaceAll('_',' ')}</span>: {value}</p>) : <p role="status">Loading hero...</p>}
  </div>;
};
// КОНЕЦ ФУНКЦИИ HeroInfo
export default AboutMe;
