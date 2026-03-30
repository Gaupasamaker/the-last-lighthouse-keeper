# The Last Lighthouse Keeper — Risk Register

> **Author**: `PRODUCER` — Executive Producer  
> **Status**: 🟢 Active — Living document  
> **Version**: 1.0  
> **Date**: 2026-03-30  
> **Last Updated**: 2026-03-30  
> **Related**: [Project Plan](./project_plan.md) · [DEC-2026-001](/artifacts/decisions/DEC-2026-001.md)

---

## Risk Summary

| Total | 🔴 Critical | 🟠 High | 🟡 Medium | 🟢 Low |
| :--- | :--- | :--- | :--- | :--- |
| 9 | 1 | 2 | 4 | 2 |

---

## Risks

---

### RISK-001 — Signal System Scalability

| Field | Detail |
| :--- | :--- |
| **Rating** | 🟢 Low |
| **Category** | Technical |
| **Owner** | `TECHDIR` |
| **Affects** | M0, M1, M2 |
| **Status** | Mitigated |

**What happens**: The signal processor works at 5 signals but breaks — in performance, extensibility, or maintainability — at the 70-signal scale NARRATIVE requires.

**Why it matters**: The signal system is the game's differentiator. If it doesn't work, the project's identity collapses into a task checklist.

**Mitigation**: M0 spike validates before commitment. Lazy-loading strategy designed in spike plan. Scale test at 70 synthetic signals is a spike success criterion.

**Tripwire**: Spike overruns Day 3. Scale test exceeds 50MB memory. TECHDIR reports "viable with major caveats."

**Contingency**: If spike fails completely, evaluate two alternatives: (A) static signal pool without reactivity, scope reduced but game still works; (B) pivot to a simpler trigger model with fewer branching paths.

---

### RISK-002 — Narrative branching exceeds scope

| Field | Detail |
| :--- | :--- |
| **Rating** | 🟠 High |
| **Category** | Content / Production |
| **Owner** | `PRODUCER` + `NARRATIVE` |
| **Affects** | M2, M3 |

**What happens**: Each "what if" creates content branches. NARRATIVE's creativity naturally pushes toward richer, more complex story trees that exceed what ENGINEER can implement and QA can test.

**Mitigation**: Hard cap: 3 branches × 12 nodes per game-day (max ~168 total nodes). PRODUCER monitors node count at each gate.

**Tripwire**: Node count exceeds 200. NARRATIVE requests "one more branch" more than twice per milestone. ENGINEER estimates integration time growing per-signal.

---

### RISK-003 — Maintenance loop becomes a tedious checklist

| Field | Detail |
| :--- | :--- |
| **Rating** | 🟠 High |
| **Category** | Design / Player Experience |
| **Owner** | `DESIGNER` |
| **Affects** | M1, M2 |

**What happens**: The day phase feels repetitive. Players optimize a routine and stop engaging with the maintenance tasks as decisions, treating them as obstacles to the "real" game (nighttime signals).

**Mitigation**: Three-phase evolution (learning → deterioration → triage). Task 4 (railing) is an intentional canary — seems useless in M1, matters in M2. QA playtests specifically track engagement metrics and language about the day phase.

**Tripwire**: QA playtest report uses words like "tedious," "routine," "skippable," or "just clicking through."

---

### RISK-004 — Ambiguity frustrates more than intrigues

| Field | Detail |
| :--- | :--- |
| **Rating** | 🟡 Medium |
| **Category** | Player Experience |
| **Owner** | `NARRATIVE` + `DESIGNER` |
| **Affects** | M2, M3 |

**What happens**: Too much ambiguity → confusion → disengagement. The player can't tell if their choices matter or if the game is randomized.

**Mitigation**: Anchor rule (1/3 of signals have verifiable outcomes). At least 2 anchor signals per 7-day act. QA calibrates via playtest.

**Tripwire**: Players can't articulate what's happening or why their choices might matter after a full play session.

---

### RISK-005 — Sensitive content handled poorly

| Field | Detail |
| :--- | :--- |
| **Rating** | 🟡 Medium |
| **Category** | Content / Reputation |
| **Owner** | `NARRATIVE` + `DIRECTOR` |
| **Affects** | M2, M3, M4 |

**What happens**: Themes of isolation, grief, and memory cross the line from "resonant" to "harmful" — trivializing real experiences or triggering vulnerable players without care.

**Mitigation**: Sensitivity guide in story bible. Content note at launch. All sensitive content reviewed by DIRECTOR before integration. No clinical language or explicit depictions of trauma.

**Tripwire**: Internal review raises concerns. External feedback (if early-tested) reports discomfort or misrepresentation.

---

### RISK-006 — Scope creep through incremental additions

| Field | Detail |
| :--- | :--- |
| **Rating** | 🟡 Medium |
| **Category** | Production |
| **Owner** | `PRODUCER` |
| **Affects** | M2, M3 |

**What happens**: Small additions compound. "What if we also added weather?" "What about a journal system?" Each one is small; together they push a size M project toward L.

**Mitigation**: Strict milestone gates. Feature freeze at M3. Any new feature after M1 requires a scope change document reviewed by PRODUCER and DIRECTOR. The bar is: "Does cutting this make the game unshippable?"

**Tripwire**: More than 2 scope change requests per milestone. PRODUCER's time shifts to negotiation.

---

### RISK-007 — Untested studio processes add friction

| Field | Detail |
| :--- | :--- |
| **Rating** | 🟡 Medium |
| **Category** | Process |
| **Owner** | `PRODUCER` |
| **Affects** | M0, M1 |

**What happens**: This is Handor Games' first project. Handoffs, conversations, decision logs — all of it is untested in real production. Some templates may be too heavy. Some steps may be missing.

**Mitigation**: Accept friction in M0–M1 as learning cost. Retrospective after M1 to adjust processes. Prioritize working product over perfect paperwork.

**Tripwire**: Agents bypass handoff system. Decision logs go unfilled. Templates are abandoned or shortened because they're too burdensome.

---

### RISK-008 — Engine selection delayed too long

| Field | Detail |
| :--- | :--- |
| **Rating** | 🟢 Low |
| **Category** | Strategic |
| **Owner** | `TECHDIR` + `DIRECTOR` |
| **Affects** | M3, M4 |

**What happens**: The game is engine-agnostic in v1, but a visual presentation layer will be needed. If the engine decision comes too late, asset creation and UI work may need retrofitting.

**Mitigation**: TECHDIR includes engine evaluation during M2. Decision by end of M2. Architecture designed with thin translation layer.

**Tripwire**: M3 begins with no engine decision. ARTIST creates assets without target specs.

---

### RISK-009 — Single-location fatigue

| Field | Detail |
| :--- | :--- |
| **Rating** | 🟢 Low |
| **Category** | Design / Player Experience |
| **Owner** | `CREATIVE` + `DESIGNER` |
| **Affects** | M2, M3 |

**What happens**: 14 days in one lighthouse. Even with escalation, the player may feel spatially trapped. The environment doesn't change enough to sustain interest.

**Mitigation**: The lighthouse changes *state*, not location. Deterioration, broken systems, and environmental storytelling (M2 diary fragments, hidden inscriptions) keep the space evolving. DESIGNER treats the lighthouse as a living system, not a static backdrop.

**Tripwire**: QA reports that players describe the environment as "samey" after Day 7.

---

## Review Schedule

| When | Who | Action |
| :--- | :--- | :--- |
| Each milestone gate | `PRODUCER` | Review all risks, update ratings |
| Weekly status report | `PRODUCER` | Flag new risks |
| After each QA playtest | `QA` + `PRODUCER` | Review experience risks (003, 004, 009) |
| After scope change request | `PRODUCER` | Update RISK-006 |
| After spike completion | `TECHDIR` | Update RISK-001 |

---

## Change Log

| Date | Change | Author |
| :--- | :--- | :--- |
| 2026-03-30 | Initial register — 9 risks | `PRODUCER` |

---

*Risk Register v1.0 — Handor Games Studio · `PRODUCER`*
