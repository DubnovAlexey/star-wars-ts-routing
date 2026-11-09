import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";

const Header = () => {
    const {hero} = useContext(SWContext)

    return (
        <header className="rounded-t-3xl bg-grey">
            <Navigation/>
            {/* From 640 px the menu is pinned over the header top: the name starts below it instead of touching "Contact" */}
            <h1 className="text-center text-4xl py-6 sm:pt-12">{characters[hero].name}</h1>
        </header>
    )
}

export default Header;