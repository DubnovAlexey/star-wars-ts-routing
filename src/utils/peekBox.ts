// Where the big copy of a hovered photo stands (see useHoverZoom.ts).
// Owner's rule (14.11.2026): pictures sit in small windows, so under the mouse they grow seriously —
// a portrait or a square about 2.5×, a wide picture 3× — instead of twitching by a few per cent.
// A pure function: it only gets rectangles and reads nothing from the page, so the tests can check it.

export interface Box {
    left: number;
    top: number;
    width: number;
    height: number;
}

export const ZOOM_TALL = 2.5; // portrait and square
export const ZOOM_WIDE = 3; // a picture wider than 4:3 grows more
export const ZOOM_MARGIN = 14; // gap from the window edge

/**
 * The big copy: k × the photo width, the whole picture in its own proportions (nothing cropped),
 * shrunk to fit the window, centred on the photo and pushed inside the window margins.
 */
export function peekBox(rect: Box, ratio: number, view: { width: number; height: number }): Box {
    const k = ratio > 4 / 3 ? ZOOM_WIDE : ZOOM_TALL;
    let width = rect.width * k;
    let height = width / ratio;
    const fit = Math.min(1, (view.width - ZOOM_MARGIN * 2) / width, (view.height - ZOOM_MARGIN * 2) / height);
    width *= fit;
    height *= fit;
    const clamp = (value: number, size: number, limit: number) => Math.min(Math.max(value, ZOOM_MARGIN), limit - size - ZOOM_MARGIN);
    return {
        left: clamp(rect.left + rect.width / 2 - width / 2, width, view.width),
        top: clamp(rect.top + rect.height / 2 - height / 2, height, view.height),
        width,
        height,
    };
}
