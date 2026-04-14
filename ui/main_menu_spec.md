# Main Menu (M1) — UI Spec

> **Author**: `DESIGNER`
> **Status**: ✅ Active  
> **Date**: 2026-03-30
> **Handoff To**: [HO-2026-007](/handoffs/HO-2026-007.md)

---

## 1. UX Structure & Flow

The Main Menu is the absolute first point of contact for the First Playable. Flow must be instantaneous and intuitive.

**Primary Options (Stack Order)**:
1. `Continue` (State-dependent)
2. `New Game`
3. `Settings` (M1 Placeholder)
4. `Quit`

### Interaction Logic
- Cursor starts focused on `Continue` if a valid, uncorrupted save exists.
- If no save exists (or save is corrupted), `Continue` is disabled and focus starts on `New Game`.
- Navigation supports both standard Mouse (hover), and Keyboard (WASD/Arrows + Enter). Keyboard focus must be distinctly tracked to avoid conflict with where the mouse cursor happens to be resting.

---

## 2. Option States

| Button | 🟢 Idle | 🟡 Mouse Hover | 🔵 Keyboard Focus | 🔴 Selected (Click/Enter) | 🔲 Disabled |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Continue** | Opacity 80% | Scale 110% | Prefixed with `> ` | Flash white, load save | Opacity 20%, unclickable (no save / corrupt JSON) |
| **New Game** | Opacity 80% | Scale 110% | Prefixed with `> ` | Confirm overwrite popup if save exists | N/A |
| **Settings** | Opacity 80% | Scale 110% | Prefixed with `> ` | Shows "Settings (Coming in M2)" placeholder overlay | N/A |
| **Quit** | Opacity 80% | Scale 110% | Prefixed with `> ` | Safely terminates local wrapper instance | N/A |

---

## 3. Information Hierarchy & Anchoring

- **Anchor Point**: The entire menu list must be anchored to the **Bottom-Left** quadrant. 
- **Margin**: 10% padding from left screen edge, 15% from bottom screen edge.
- **Why?**: This leaves the center and right side of the screen clear for the ARTIST's background element. 

## 4. Accessibility Constraints

- **Text Scaling**: The text boxes for each option must expand to the right without clipping if the user increases font scale up to 150%. No vertical stacking on text.
- **Clear Modality**: Keyboard focus is explicitly distinguished from mouse hover to assist players using alternative controllers.

*Handor Games — DESIGNER execution*
