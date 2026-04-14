# Branch Candidate Summary: UI Prototype (M1)

> **Author**: `ENGINEER`
> **Date**: 2026-03-30
> **Target Branch**: `feature/m1-main-menu`

This document summarizes the current state of the UI Prototype package prior to merging it into the designated feature branch.

## 1. Files Included in Candidate
- `/public/index.html`
- `/public/styles.css`
- `/public/menu.js`
- `/src/menu_server.js`
- `/data/gameState.example.json`
- `/README.md`
- `/engineer_tradeoffs.md`

## 2. Review Status (What is Done)
The scaffold correctly fulfills the M1 Front Door design constraints:
- **Architecture**: A reliable, zero-dependency Node HTTP server serving static DOM assets that read and parse CSS cleanly.
- **UX Parity**: Keyboard input is logically isolated from Mouse hovering state via separated CSS (`::before` psuedo-elements). 
- **Security Check**: Path Traversal injection has been stripped (`path.normalize`) from the file serving loop.
- **Navigation Polish**: The keyboard listener handles navigation arrays across W/S/Arrow inputs natively preventing DOM scroll-hijacking, and normalizes key strings explicitly using `e.key.toLowerCase()` to prevent Caps Lock inputs from ignoring state changes.

## 3. Intentionally Prototype-Grade (M1 Limitations)
- **JSON Schemas**: No formal validation (like `Zod`). It uses native `JSON.parse` with a `try/catch`. 
- **MIME Types**: Mapped manually in `menu_server.js` instead of pulling `express.static()`.
- **Art Asset**: The HTML uses a `#art-background` radial gradient mockup block instead of the finalized `.webm`.

## 4. Acceptable to Merge to Feature Branch NOW
All code modifications satisfy `DESIGNER` structure and `ARTIST` scaling limits securely. It is 100% stable as a standalone component testbed. This is safe to push to `feature/m1-main-menu` so the team can pull it, boot `localhost:3000`, and begin logging aesthetic balance tickets.

## 5. Must Be Fixed Before Merge to `main`
- `DESIGNER` and `ARTIST` must explicitly approve the visual transition speeds (e.g., hover drop-shadow elasticity) inside a local branch check. 
- The `try/catch` must be wired directly to the active `GameLoop`'s actual save file, not the internal `data/gameState.example.json` mockup.
