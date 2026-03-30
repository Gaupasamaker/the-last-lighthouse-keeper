# Main Menu (M1) — Review Summary

> **Author**: Handor Games Studio  
> **Date**: 2026-03-30
> **Status**: ✅ Completed

---

## 1. M1 Alignment Corrections
The initial specifications for the Main Menu have been successfully reviewed and brought into exact alignment across UX (`DESIGNER`), Aesthetics (`ARTIST`), and Code architecture (`ENGINEER`). 

The following mismatches were resolved to make the package implementation-ready for the First Playable:
1. **Keyboard vs Mouse Focus**: Originally grouped together, `Hover` (mouse) and `Focus` (keyboard) are now explicit, distinct visual and logical states. Keyboard adds a `> ` prefix to avoid ambiguity.
2. **Corrupted Save Data**: Clarified that an invalid or corrupted JSON save acts identically to an empty save (disabling the 'Continue' button) rather than freezing the menu logic. Engineer added a specific `try/catch` blocker for this.
3. **The 'Quit' Sandbox Conflict**: The original spec asked to "Exit application". Since M1 is a Node/HTML local wrapper, browsers block programmatic tab closing. The plan was corrected so 'Quit' shuts down the Node.js backend server and renders a safe-to-close text screen.

## 2. Intentionally Simplified for M1
To protect the First Playable delivery date, several features were actively suppressed into placeholders:
- **Settings Screen**: Fully deferred to M2. Clicking it currently brings up a styled placeholder overlay acknowledging its future implementation.
- **Background Rendering**: Refused real-time 3D shaders. ARTIST is providing a looping `.webm` / `.gif` video to keep frontend DOM performance perfect.

## 3. Ready for Implementation
The entire package `ui/` is now entirely coherent. The `ENGINEER` has a concrete, testable checklist that satisfies both discipline constraints. The M1 Front Door is ready to be coded.
