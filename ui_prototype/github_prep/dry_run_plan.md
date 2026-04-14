# GitHub Publishing Dry Run: Main Menu (M1)

> **Author**: `ENGINEER` & `TECHDIR`
> **Status**: 📝 Draft (Dry Run)
> **Goal**: Prepare the UI prototype package for safe ingestion into the Handor Games `main` branch.

---

## 1. GitHub Readiness Checklist

- [x] **No Secrets**: Zero credentials, API keys, or hidden `.env` files.
- [x] **No Temp Files**: Directory is clean, no `.tmp` or scratch scripts present.
- [x] **No Broken References**: All handoff links and spec files (`menu.js`, `styles.css`) resolve correctly.
- [x] **No Incomplete Artifacts**: All `[x]` boxes in `main_menu_implementation_plan.md` are marked complete. No zombie tasks.
- [x] **Format Alignment**: `gameState.example.json` matches M0/M1 schema exactly.

## 2. Proposed Branch Name
`feature/m1-main-menu`

> [!NOTE]
> Adheres to the v2.0 `publish-to-github` standard requiring `feature/*` convention for implementation work.

---

## 3. Proposed Commit Plan

Instead of a single massive dump, we break the push into 4 logical atomic commits to make code review straightforward for `TECHDIR`.

1. **Commit 1**: `[docs]: add m1 main menu ux and visual specs`
   - *Files*: `ui/main_menu_spec.md`, `ui/main_menu_visual_direction.md`, `ui/main_menu_implementation_plan.md`, `ui/main_menu_review_summary.md`
2. **Commit 2**: `[ui]: add generic dom structural scaffold and css rules`
   - *Files*: `ui_prototype/public/index.html`, `ui_prototype/public/styles.css`
3. **Commit 3**: `[config]: inject mock m1 gamestate serialization check`
   - *Files*: `ui_prototype/data/gameState.example.json`
4. **Commit 4**: `[ui]: implement node backend and intersection behavior logic`
   - *Files*: `ui_prototype/src/menu_server.js`, `ui_prototype/public/menu.js`, `ui_prototype/engineer_tradeoffs.md`, `ui_prototype/README.md`

---

## 4. Proposed Pull Request Summary

**Title**: `Feature: M1 Main Menu Front Door (Engine-Agnostic)`
**Review Owner**: `TECHDIR`

**Summary**:
This PR implements the First Playable (M1) main menu using an engine-agnostic Node/HTML local wrapper. 

**Changes**:
- Added pure DOM/Vanilla-JS layout resolving UX specification parameters (Horizontal text flex capping, Keyboard/Mouse isolate tracking).
- Added `menu_server.js` using native `http` module to handle local IO hydration checks.
- Bound all ARTIST hex mappings into `styles.css` with pseudo-states for explicit accessibility rendering.
- Added `gameState.example.json` to prove the `try/catch` blocker on corrupted loading flows.

**Validation**:
- Passed manual tests for keyboard hijacking.
- Successfully fires local `process.exit(0)` on Quit action.
- Validated text expansion width using `rem` tracking at 150% font scale.

**Risks**: None. Zero external package dependencies introduced.

---

## 5. Sensitive Data Check

> [!IMPORTANT]
> **Audit Status**: PASSED. 
> The Node server strictly serves files inside the localized `PUBLIC_DIR` constant. No credential injection was used string-wise. No `node_modules` are targeted for upload. GitHistory is clean locally.

---

## 6. Official Recommendation

> [!WARNING]
> recommendation: **WAIT FOR REVIEW (HOLD PUSH)**

Before we invoke the `mcp_github_push_files` tool, `DESIGNER` and `ARTIST` should boot the prototype (`node src/menu_server.js`) on their local machines. 
While `ENGINEER` fully executed the spec, UX pacing details (e.g., transition speed of the hover shadow, layout feel of the `Settings` overlay) are intensely subjective and better caught before the code hits the `feature` branch. 

**Action:** Pause the dry run. Let Creative leads validate the live `http://localhost:3000` feel, then execute the commit plan above once they sign off.
