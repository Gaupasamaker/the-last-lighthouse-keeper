# Final PR Summary: M1 Main Menu Front Door

**Title**: `Feature: M1 Main Menu Front Door Scaffold`
**Review Owner**: `TECHDIR`

**Summary**:
Implements the M1 First Playable Main Menu according to the latest Handor Games specifications. Establishes a zero-dependency, engine-agnostic Node.js/HTML local browser wrapper handling keyboard state tracking, JSON save hydration, and accessibility scaling limits.

**Linked Artifacts**:
- Resolves HO-2026-007 (UX flow spec)
- Resolves HO-2026-008 (Visual CSS layout spec)

**Changes**:
- Added pure DOM/Vanilla-JS layout isolating Mouse/Keyboard input logic.
- Built a zero-dependency Node.js `http` server for localized file serving.
- Implemented `try/catch` blocker preventing progression if `gameState.json` is corrupted.
- Defined CSS `:hover` states and `::before` pseudo-elements for accessible cursor tracking.

**Validation**:
- Keyboard W/S/Arrow inputs successfully prevent page scrolling via `e.preventDefault()`.
- Inputs normalized with `toLowerCase()` to handle active Caps Lock gracefully.
- Re-tested directory traversal edge cases (`../`) in the Node server; completely blocked.

**Known Limitations & Risks**:
1. **Quit Protocol Bypass**: Modern browsers block `window.close()` on user-opened tabs via client-side logic. To resolve the 'Quit' UX loop, the webapp makes a POST request to terminate the Node backend (`process.exit(0)`) directly. This is a functional prototype hack, not a commercial-grade feature.
2. **Hardcoded Mocking**: The JSON check purely parses `data/gameState.example.json`. We do not have Zod/AJV schema validation running yet, so structural integrity is checked exclusively by `JSON.parse`.
3. **Subjective Timing**: The CSS animations (Load pulses, shadow fades) are explicitly mapped per spec, but may require a visual tweak pass from `ARTIST` later.
