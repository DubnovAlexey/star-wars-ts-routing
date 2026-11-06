import {fetchJson} from '../utils/request.ts';
import {useEffect, useState} from "react";
import {base_url, period_month, storage_prefix} from "../utils/constants.ts";

import {isPlanetList, readCache, writeCache} from '../utils/cache.ts';

const loadCachedPlanets = () => readCache(storage_prefix + 'planets', period_month, isPlanetList, 'time');

const Contact = () => {
    const [planets, setPlanets] = useState<string[]>(() => loadCachedPlanets() ?? ['Loading planets...']);
    const [submission, setSubmission] = useState('');

    useEffect(() => {
        if (loadCachedPlanets()) return;
        const controller = new AbortController();
        fetchJson(`${base_url}/v1/planets`, controller.signal)
            .then(data => {
                if (!Array.isArray(data)) throw new Error('Invalid planet data');
                const names = data.map(item => item?.name);
                if (!isPlanetList(names)) throw new Error('Invalid planet names');
                if (controller.signal.aborted) return;
                setPlanets(names);
                writeCache(storage_prefix + 'planets', {payload:names,time:Date.now()});
            })
            .catch(() => { if (!controller.signal.aborted) setPlanets(['Planets are unavailable now']); });
        return () => controller.abort();
    }, []);

    return (
        <form className={`w-4/5 my-0 mx-auto rounded-[5px] bg-[#f2f2f2] p-5`} onSubmit={(e) => {
            e.preventDefault();
            setSubmission('Demo form: no message has been sent.');
        }}>
            <label className={`w-full text-red`}>First Name
                <input className={`text-black border w-full p-3 border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y`}
                       type="text"
                       name="firstname" placeholder="Your first name..."/>
            </label>
            <label className={`w-full text-red`}>Last Name
                <input className={`text-black border w-full p-3 border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y`}
                       type="text"
                       name="lastname" placeholder="Your last name..."/>
            </label>
            <label className={`w-full text-red`}>Planet
                <select className={`border w-full text-black p-3 border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y`}
                        name="planet">{
                    planets.map(item => <option value={item} key={item}>{item}</option>)
                }
                </select>
            </label>
            <label className={`w-full text-red`}>Subject
                <textarea
                    className={`text-black border h-52 w-full p-3 border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y`}
                    name="subject" placeholder="Write something..."/>
            </label>
            <p className="text-black">Demo form: messages are not sent.</p>
            <p className="text-black" role="status">{submission}</p>
            <button
                className={`bg-[#4CAF50] text-white py-3 px-5 border-none rounded-[4px] cursor-pointer hover:bg-[#45a049]`}
                type="submit">Submit
            </button>
        </form>
    )
}

export default Contact;