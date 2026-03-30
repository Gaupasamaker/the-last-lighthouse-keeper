# Final Repository Scope Check

> **Author**: `TECHDIR` & `PRODUCER`
> **Date**: 2026-03-30
> **Target**: The Last Lighthouse Keeper Canonical Repository

Before staging the initial commit and branching off `main`, the scope of inclusion has been audited to prevent repository clutter. The goal is to ensure a contributor pulling this repo receives exactly what they need to read the specs and run the M1 Main Menu UI Prototype, without inheriting the macro Handor Games studio governance documents.

## 1. Included NOW
- `/ui_prototype/`: The full functioning HTML/Node.js scaffolding.
- `/ui/`: The finalized specifications (UX, Visual matching, Implementation Tech Plan) required to code-review the prototype.
- `/github_prep/`: Maintained inside `/ui_prototype/` for historical tracking of the push decision.
- Root Markdown Files: `README.md`, `creative_vision.md`, `game_brief.md`, `first_playable_scope.md`, `technical_spike_plan.md`, `risk_register.md`, `story_bible_initial.md`. (These define *what* the game actually is, strictly relevant to the repository).
- `assets/`: The root directory for future M1 media.

## 2. Excluded For Now
- The macro `Handor Games/docs/` governance files (e.g., `execution_ownership.md`, `agent_voice_system.md`). The studio repository is separate from the *project* repository.
- The `Handor Games/agents/` profiles.
- Any Node `node_modules`: Blocked natively by the new `.gitignore`.

## 3. Risky or Optional Items
- **The internal `github_prep` folder**: Exposing `dry_run_plan.md` or `push_result.md` within the `ui_prototype/` directory itself may be viewed as messy source control metadata. *Decision: Tolerated for M1 to preserve audit history, but should be `.gitignored` in M2.*
- **`game_projects/the-last-lighthouse-keeper/ui/main_menu_review_summary.md`**: Technically a management artifact, not a code spec. *Decision: Included, as it explains why certain features in the spec (like the Settings menu) were bypassed in the code layer.*
