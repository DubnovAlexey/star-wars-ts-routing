import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {defaultHero} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";
import {useHoverZoom} from "./utils/useHoverZoom.ts";

function App() {
    const [hero, setHero] = useState(defaultHero);
    // Hero and friend photos grow 2.5–3× under the mouse — one listener for every page
    useHoverZoom();

    return (
        <div className={'mx-2'}>
            <SWContext value={{hero, changeHero: setHero}}>
                <Header/>
                <Main/>
                <Footer/>
            </SWContext>
        </div>
    )
}

export default App
