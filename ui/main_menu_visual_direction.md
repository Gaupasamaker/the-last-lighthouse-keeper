# Main Menu (M1) — Visual Direction

> **Author**: `ARTIST`
> **Status**: ✅ Active  
> **Date**: 2026-03-30
> **Handoff To**: [HO-2026-008](/handoffs/HO-2026-008.md)

---

## 1. Aesthetic Intention

The main menu must establish isolation before the game even begins.
- **Composition**: Heavy negative space on the left, occupied solely by the text menu.
- **Key Art**: Since M1 is an engine-agnostic HTML wrapper, the background will be a lightweight looping `.webm` or high-quality `.gif` video file of oceanic fog and a turning lighthouse beam, to avoid the performance cost of real-time shaders in a browser DOM.

## 2. Typography & States

Ditching stylistic pixel fonts because they break at higher scaling.

- **Primary Font**: `IBM Plex Mono` (Clean, utilitarian, scales perfectly).
- **Secondary Title**: `Playfair Display` (For the logo text '*The Last Lighthouse Keeper*').

### Visual State Matrix (Aligned with DESIGNER)
| State | Behavior & Color |
| :--- | :--- |
| **🟢 Idle** | `#BDBDBD` (Dusty Ivory). |
| **🟡 Mouse Hover** | `#FFFFFF`. Slight drop shadow (opacity 20%, blur 8px). |
| **🔵 Keyboard Focus** | `#FFFFFF`. Text is prepended with a `>` character (e.g., `> Continue`). |
| **🔴 Pressed** | `#FFC107` (Warning Amber). Fast flash interpolating back to White over 0.1s. |
| **🔲 Disabled** | `#3E4045` (Slate Gray). Strikethrough line, zero hover/focus FX permitted. |

*Note: For M1 Settings placeholder, a simple bordered div with `#BDBDBD` text on a `#000000` background (80% opacity) is sufficient.*

## 3. Placement & Padding

- **Logo anchor**: X: 10%, Y: 10% from Top-Left.
- **Menu anchor**: X: 10%, Y: 85% from Top-Left (aligning to bottom left).
- **Padding**: Spacing between menu options must be exactly 2.5em to prevent misclicks on touch/mouse when scaled up.

*Handor Games — ARTIST execution. Keeping the contrast sharp but viable for M1 HTML.*
