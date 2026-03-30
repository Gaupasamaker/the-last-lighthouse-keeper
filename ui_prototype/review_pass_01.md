# UI Prototype M1 — Review Pass 01

> **Author**: `ENGINEER`
> **Status**: ✅ Completed
> **Date**: 2026-03-30

Following the initial scaffolding, a dedicated polish pass was executed to improve the robustness and UX standard of the prototype without violating the engine-agnostic constraints.

---

## 1. What Was Improved

1. **Focus State Decoupling**: Replaced the dirty JS string-manipulation hack (`element.innerText = "> " + text`) with a clean CSS pseudo-element (`::before { content: "> "; }`). This prevents DOM text mutation and allows for flawless transition rendering.
2. **Keyboard Trapping**: Added `e.preventDefault()` to the specific WASD/Arrow navigation array. This stops the browser from scrolling the window if the window size is ever forced below the viewport threshold.
3. **M1 Overlay Escapes**: Bound both *click* and *any keypress* to dynamically dismiss the "Settings" placeholder popup.
4. **Hydration UX**: Added `#loading-state` to `index.html` with a pulsing CSS animation. The primary menu `<ul id="menu-list">` is now fully hidden until the Node.js `fetch('/api/gamestate')` promise resolves, preventing players from clicking buttons before state hydration is complete.
5. **Path Traversal Constraints**: Fortified the `menu_server.js` static hosting loop using Node's `path.normalize()` and regex stripping to completely block arbitrary `../` calls from the browser pointing outside of `/public`.
6. **Code Contextualization**: Extensively commented the JS files, clearly noting the security bypass logic applied to the `Quit` POST endpoint, and structurally detailing the input sandboxing layers.

---

## 2. Intentionally Left Simple

- **The Static File Host**: The Node script still relies on manual MIME-type pairing (`mimeTypes` object). It was tempting to import `express` to handle `express.static()`, but we preserved the zero-dependency promise to guarantee it boots immediately from clone without a `package.json`.
- **Placeholder Video Hook**: Did not embed a dummy video `<video>` tag for ARTIST; kept the fallback CSS radial gradient until an actual asset is passed.
- **Corrupted JSON Hard-Fail**: We are still treating corrupted saves identically to "no save". We do not attempt to repair the object structure. Doing so requires schema ingestion, which violates the lightweight mandate of this specific layer.

---

## 3. Future Upgrade Path (M2+ Runtime)

If the team decides to keep this HTML/Node wrapper architecture through vertical slice (M2) rather than jumping to Godot or Unity, this scaffolding must be upgraded:
- **State Management**: The `menu.js` file will become a monolith if we add Audio channels and Gameplay logic to it. We will need a lightweight bundler (e.g., Vite) and a virtual DOM wrapper (e.g., Preact/Svelte) instead of direct `document.getElementById` manipulation.
- **JSON Schema Validation**: We must import an actual schema validation library (like Zod or AJV) instead of relying purely on the `JSON.parse` try/catch block.
- **CSS Architecture**: Move away from a single bloated `styles.css` into modular CSS (or SCSS) to manage complex interactive components like inventory grids.

*M1 Front Door is polished. Branch is ready for PR when approved by Art and Design.*
