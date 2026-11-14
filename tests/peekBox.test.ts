// A hero photo under the mouse grows for real (owner's rule, 14.11.2026): portrait and square ≈ 2.5×,
// wide ≈ 3×, whole and inside the window. Checks the place calculation in src/utils/peekBox.ts.
import test from 'node:test';
import assert from 'node:assert/strict';
import {peekBox, ZOOM_MARGIN} from '../src/utils/peekBox.ts';

const view = {width: 1366, height: 900};
const near = (a: number, b: number) => Math.abs(a - b) < 1e-9;

test('a square friend photo grows 2.5× and stays centred on itself', () => {
    const rect = {left: 600, top: 300, width: 226, height: 182};
    const box = peekBox(rect, 1, view);
    assert.ok(near(box.width, 565) && near(box.height, 565));
    assert.ok(near(box.left + box.width / 2, rect.left + rect.width / 2));
});

test('a wide photo grows 3×, its proportions kept — nothing cropped', () => {
    const box = peekBox({left: 500, top: 300, width: 200, height: 125}, 1.6, view);
    assert.ok(near(box.width, 600));
    assert.ok(near(box.width / box.height, 1.6));
});

test('near the window edge the copy moves inside and still grows a lot', () => {
    for (const rect of [{left: 2, top: 60, width: 330, height: 330}, {left: 1150, top: 700, width: 200, height: 180}]) {
        const box = peekBox(rect, 1, view);
        assert.ok(box.left >= ZOOM_MARGIN && box.top >= ZOOM_MARGIN, JSON.stringify(box));
        assert.ok(box.left + box.width <= view.width - ZOOM_MARGIN + 1e-9, JSON.stringify(box));
        assert.ok(box.top + box.height <= view.height - ZOOM_MARGIN + 1e-9, JSON.stringify(box));
        assert.ok(box.width > rect.width * 2);
    }
});
