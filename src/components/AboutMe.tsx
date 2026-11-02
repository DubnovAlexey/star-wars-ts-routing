import {characters, defaultHero, period_month, storage_prefix} from "../utils/constants.ts";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import ErrorPage from "./ErrorPage.tsx";
import {SWContext} from "../utils/context.ts";

const personFields = ['name', 'gender', 'birth_year', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color'];
const transportFields = ['name', 'model', 'manufacturer', 'length', 'crew', 'passengers', 'max_atmosphering_speed', 'cargo_capacity'];

// Hero from localStorage if it is younger than a month
const loadCachedHero = (heroId: string) => {
    try {
        const hero = JSON.parse(localStorage.getItem(storage_prefix + heroId)!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            return hero.payload;
        }
    } catch {
        // damaged cache — load the hero again
    }
}

// key={heroId} creates a fresh HeroInfo for every hero: before, the state and the
// one-time effect survived an address change, and the previous hero stayed on screen.
const AboutMe = () => {
    const {heroId = defaultHero} = useParams();
    return <HeroInfo key={heroId} heroId={heroId}/>
}

const HeroInfo = ({heroId}: { heroId: string }) => {
    const {changeHero} = useContext(SWContext);
    const [hero, setHero] = useState(() => loadCachedHero(heroId));

    useEffect(() => {
        if (!(heroId in characters)) {
            return;
        }
        changeHero(heroId);
        if (loadCachedHero(heroId)) {
            return;
        }
        let cancelled = false; // the answer for a hero we already left is ignored
        fetch(`${characters[heroId].url}`)
            .then(response => response.json())
            .then(data => {
                // The Millennium Falcon is a ship, not a person: it has its own fields
                const fields = characters[heroId].url.includes('/transports/') ? transportFields : personFields;
                const info = Object.fromEntries(fields.map(field => [field, data[field] ?? 'unknown']));
                localStorage.setItem(storage_prefix + heroId, JSON.stringify({
                    payload: info,
                    timestamp: Date.now()
                }));
                if (!cancelled) setHero(info);
            })
            .catch(() => {
                if (!cancelled) setHero({status: 'The Star Wars data server is not answering. Try again later.'});
            });
        return () => {
            cancelled = true;
        };
    }, [heroId, changeHero])

    return (heroId in characters) ? (
        <>
            {(!!hero) &&
                <div className={'text-[2em] text-justify tracking-widest leading-14 ml-8'}>
                    {Object.keys(hero).map(key => <p key={key}>
                        <span className={'text-3xl capitalize'}>{key.replaceAll('_', ' ')}</span>: {hero[key]}
                    </p>)}
                </div>
            }
        </>
    ) : <ErrorPage/>
}

export default AboutMe;