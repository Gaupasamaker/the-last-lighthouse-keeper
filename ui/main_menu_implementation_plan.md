# Main Menu (M1) — Implementation Plan

> **Author**: `ENGINEER`
> **Status**: ✅ Active  
> **Date**: 2026-03-30
> **Handoff To**: None (Moving to Execution)

---

## 1. Stack & Architecture

We will build the M1 menu as a lightweight Node.js/HTML local browser wrapper using `express` and standard DOM manipulation to read the backend `gameState.json`.

- **Backend**: Node.js serving `gameState.json` via local HTTP endpoints.
- **Frontend**: Single HTML file `public/index.html` referencing ARTIST's `.webm` background.
- **Logic**: Vanilla JS reading DESIGNER's explicit states.

---

## 2. Implementation Checklist

- [ ] Create `src/ui/menu_server.js` to serve the static frontend on `localhost:3000`.
- [ ] Implement robust `GameState` hydration:
  - Add a `fetch` wrapper inside a `try/catch`. 
  - If JS fails to parse `gameState.json` (corrupted) or file does not exist, explicitly add the `.disabled` class to the `Continue` button element.
- [ ] Wire the 3 input vectors:
  - **Mouse**: Add CSS `:hover` states to adjust scale and drop-shadow.
  - **Keyboard**: Add `keydown` listener (`ArrowUp`, `ArrowDown`, `Enter`). Manage an internal `focusIndex` variable. If keyboard creates focus, append `> ` text to the HTML `innerHTML` and strip it when lost.
- [ ] Build M1 Placeholders:
  - `Settings`: Simply overlays a black `#000000` CSS div with text "Coming in M2". Dismisses on any click/keypress.
  - `Quit`: Since browser security prevents `window.close()` on a tab not opened by JS, `Quit` will trigger a Node.js `process.exit(0)` via a POST request, and the frontend will replace the HTML body with: `Session terminated. You may close this window.`

---

## 3. Handling Accessibility Scaling

To solve DESIGNER's 150% text scaling requirement without breaking ARTIST's padding:
- We use `rem` (root em) units for all margin/padding layout coordinates.
- Menu DOM container `<div id="menu">` will use dynamic `auto` width up to `max-width: 45vw` to ensure text bounds never bleed over the video background element on the right.

*Ready to execute the front-door.*
