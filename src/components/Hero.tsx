import {useContext} from "react";
import {characters} from "../utils/constants.ts";
import {SWContext} from "../utils/context.ts";

// Photo of the chosen hero (Luke Skywalker until another hero is opened)
const Hero = () => {
    const {hero} = useContext(SWContext);

    return (
        <section className="float-left w-1/4 mr-4 mt-2">
            {/* data-zoom: under the mouse the photo grows 2.5× over the page (utils/useHoverZoom.ts) */}
            <img className="w-full shadow-hero" src={characters[hero].img} alt={characters[hero].name} data-zoom=""/>
        </section>
    );
};

export default Hero;
