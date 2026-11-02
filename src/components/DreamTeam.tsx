import {useContext} from "react";
import {characters, navItems} from "../utils/constants.ts";
import {SWContext} from "../utils/context.ts";
import Friend from "./Friend.tsx";

// The friends of the chosen hero: every other character, each photo opens that hero's page
const DreamTeam = () => {
    const {hero} = useContext(SWContext);
    const friends = Object.keys(characters).filter(key => key !== hero);

    return (
        <section className="float-right w-1/2 grid grid-cols-3 gap-1.5  border rounded-b-3xl mt-2 ml-2">
            <h2 className="text-center col-span-3 text-2xl">Dream team</h2>
            {friends.map((key, i) => <Friend
                key={key}
                to={`/${navItems[1].toLowerCase()}/${key}`}
                friend={characters[key]}
                pos={i + 1}/>)}
        </section>
    );
};

export default DreamTeam;
