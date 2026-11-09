import NavItem from "./NavItem.tsx";
import {navItems} from "../utils/constants.ts";

// On a phone the four buttons (about 440 px) do not fit one line: the menu sits in the header, wraps and is centred
// above the hero name. From 640 px up it is pinned to the top left corner, as before.
const Navigation = () => {
    return (
        <nav className="flex flex-wrap justify-center gap-2 px-3 pt-3 sm:fixed sm:top-2 sm:left-12 sm:flex-nowrap sm:gap-4 sm:p-0">
            {navItems.map(item => <NavItem itemTitle={item} key={item}/>)}
        </nav>
    )
}

export default Navigation;