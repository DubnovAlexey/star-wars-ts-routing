import {useEffect} from "react";
import {peekBox} from "./peekBox.ts";

// A hero photo under the mouse grows for real: the whole picture, uncropped, about 2.5× (wide ones 3×),
// over its neighbours and inside the window; it grows out of its own place and shrinks back into it.
// Which photos grow is decided by the photo itself: an <img data-zoom> (Hero, Friend). One listener for
// the whole app (App.tsx), so photos that come and go with the routes need nothing more.
// The copy ignores the pointer, so a click on a friend still opens that hero's page.
// Only for a real mouse (hover + fine pointer): a finger has no hover, so on a phone nothing changes.
// «Reduce motion»: the big photo appears at once, without the growing animation.

const PICTURES = 'img[data-zoom]';
const DELAY = 140; // the mouse only flew past — no flashing

interface Shown {
    img: HTMLImageElement;
    peek: HTMLDivElement;
    from: string;
}

export function useHoverZoom() {
    useEffect(() => {
        const mouse = window.matchMedia('(hover: hover) and (pointer: fine)');
        const still = window.matchMedia('(prefers-reduced-motion: reduce)');
        let current: Shown | null = null;
        let timer = 0;

        const close = (instant: boolean) => {
            window.clearTimeout(timer);
            if (!current) return;
            const {peek, from} = current;
            current = null;
            if (instant || still.matches) {
                peek.remove();
                return;
            }
            peek.style.transform = from; // back to where it grew from
            peek.style.opacity = '0';
            peek.addEventListener('transitionend', () => peek.remove(), {once: true});
            window.setTimeout(() => peek.remove(), 400); // in case the transition never ends
        };

        const open = (img: HTMLImageElement) => {
            if (current?.img === img) return;
            close(true);
            if (!img.isConnected || !img.naturalWidth) return; // not loaded yet
            const rect = img.getBoundingClientRect();
            if (rect.width < 24) return;
            const box = peekBox(rect, img.naturalWidth / img.naturalHeight, {width: window.innerWidth, height: window.innerHeight});
            const peek = document.createElement('div');
            peek.className = 'zoom-peek';
            peek.setAttribute('aria-hidden', 'true');
            Object.assign(peek.style, {left: `${box.left}px`, top: `${box.top}px`, width: `${box.width}px`, height: `${box.height}px`});
            const copy = document.createElement('img');
            copy.alt = '';
            copy.src = img.currentSrc || img.src;
            peek.append(copy);
            // Grows out of its own place: it starts where the small photo is
            const from = `translate(${rect.left - box.left}px, ${rect.top - box.top}px) scale(${rect.width / box.width}, ${rect.height / box.height})`;
            if (!still.matches) {
                peek.style.transform = from;
                peek.style.opacity = '0.4';
            }
            document.body.append(peek);
            current = {img, peek, from};
            if (!still.matches) {
                requestAnimationFrame(() => requestAnimationFrame(() => {
                    peek.style.transform = 'none';
                    peek.style.opacity = '1';
                }));
            }
        };

        const pictureOf = (target: EventTarget | null) =>
            target instanceof Element ? target.closest<HTMLImageElement>(PICTURES) : null;
        const onOver = (event: PointerEvent) => {
            if (!mouse.matches || event.pointerType !== 'mouse') return;
            const img = pictureOf(event.target);
            if (!img) return;
            window.clearTimeout(timer);
            timer = window.setTimeout(() => open(img), DELAY);
        };
        const onOut = (event: PointerEvent) => {
            const img = pictureOf(event.target);
            if (!img || (event.relatedTarget instanceof Node && img.contains(event.relatedTarget))) return;
            window.clearTimeout(timer);
            if (current?.img === img) close(false);
        };
        const closeNow = () => close(true);
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') close(true);
        };

        document.addEventListener('pointerover', onOver);
        document.addEventListener('pointerout', onOut);
        document.addEventListener('click', closeNow, true); // a click opens another hero — the copy must not stay
        document.addEventListener('keydown', onKey);
        window.addEventListener('scroll', closeNow, {passive: true});
        window.addEventListener('resize', closeNow);
        window.addEventListener('hashchange', closeNow);
        return () => {
            document.removeEventListener('pointerover', onOver);
            document.removeEventListener('pointerout', onOut);
            document.removeEventListener('click', closeNow, true);
            document.removeEventListener('keydown', onKey);
            window.removeEventListener('scroll', closeNow);
            window.removeEventListener('resize', closeNow);
            window.removeEventListener('hashchange', closeNow);
            close(true);
        };
    }, []);
}
