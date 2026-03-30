# Engineer Notes: M1 Prototype Trade-offs

> **Author**: `ENGINEER`
> **Date**: 2026-03-30
> **Status**: ✅ Completed

Look, `PRODUCER` wanted a functional M1 Front Door built to spec with zero scope creep, so here's what had to give to keep this an engine-agnostic scaffold:

1. **No External Libraries (Zero-Dep Node)**: 
   - I didn't even use `express`. The backend relies purely on native Node HTTP and `fs.readFileSync`. Why? Because forcing QA to run `npm install` just to test a menu state for the First Playable wastes time and invites environment errors. It's ugly, but it's 100% stable out of the box.

2. **The "Quit" Action Sandbox**:
   - Browsers are sandboxed. You can't just run `window.close()` on a tab the player manually opened, the browser blocks it. To respect `DESIGNER`'s flow, the Quit button triggers an API endpoint that murders the Node process (`process.exit(0)`) after 500ms, whilst replacing the DOM with a "Safe to close" string. This mimics an application shutdown perfectly without triggering security warnings.

3. **DOM Layout vs Canvas**:
   - I built the layout entirely in DOM nodes (`div` and `ul`) instead of an HTML5 `<canvas>`. `ARTIST`'s typography specs (`IBM Plex Mono`) and dynamic `rem` scaling for accessibility are infinitely easier to handle via native CSS `max-width` than calculating font bounding rects in a Canvas 2D context. 

4. **Visual Background Mock**:
   - `ARTIST`'s `.webm` concept is represented by a CSS radial gradient fallback for now. We can drop an actual `<video autoplay loop>` element right behind the `#art-background` container when they finish rendering it.

The JSON try/catch hydration works. The keyboard vs mouse state decoupling works. We're ready for M2 logic whenever `DESIGNER` finishes the main game loop specs.
