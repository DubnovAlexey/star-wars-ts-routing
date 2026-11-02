import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {HashRouter} from "react-router";

// HashRouter keeps the route after "#", so reloading /#/about_me works on GitHub Pages
// and inside an iframe in UNIVERSE, where the server knows only index.html.
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </StrictMode>,
)
