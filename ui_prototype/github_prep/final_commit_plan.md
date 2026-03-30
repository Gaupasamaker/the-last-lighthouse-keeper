# Final Commit Plan: M1 Main Menu UI

> **Branch**: `feature/m1-main-menu`

This commit chain isolates changes anatomically so code reviewers can clearly differentiate between specification rules and programmatic execution.

### Commit 1: Documentation & Specifications
**Format**: `[docs]: add aligned ux and visual specs for m1 main menu`
- Adds UX specs, visual direction, handoff logs, and review summaries.
- *Reasoning*: Establishes the rulebook before the code introduces the logic.

### Commit 2: Visual Structure (Frontend Shell)
**Format**: `[ui]: scaffold robust dom shell and explicit visual states`
- Adds `public/index.html` and `public/styles.css`.
- *Reasoning*: Separates DOM elements and CSS focus mapping (via `::before`) from any JS logic, proving accessibility margins (45vw).

### Commit 3: Data Mocking Check
**Format**: `[config]: inject mock gamestate payload for m1 hydration`
- Adds `data/gameState.example.json`.
- *Reasoning*: Provides the raw JSON architecture required for the logic layer to safely prove the hydration checks.

### Commit 4: Node Wrapper & Logic Input
**Format**: `[core]: implement zero-dependency server mapping and input trapping`
- Adds `src/menu_server.js`, `public/menu.js`, and `engineer_tradeoffs.md`.
- *Reasoning*: Ships the actual Node backend, the `e.key.toLowerCase()` JS event blockers, and the engineer's rationale. This is the structural core of the PR.
