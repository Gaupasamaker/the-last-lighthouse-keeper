# The Last Lighthouse Keeper — Project Plan

> **Author**: `PRODUCER` — Executive Producer  
> **Status**: ✅ Active  
> **Version**: 1.0  
> **Date**: 2026-03-30  
> **Responds to**: [HO-2026-004](/handoffs/HO-2026-004.md)  
> **Related**: [DEC-2026-001](/artifacts/decisions/DEC-2026-001.md) · [CONV-2026-002](/artifacts/conversations/CONV-2026-002.md)

---

## Project Identity

| Field | Value |
| :--- | :--- |
| **Title** | The Last Lighthouse Keeper |
| **Scope** | M (Medium) |
| **Engine** | Agnostic (v1) |
| **Team** | Full Handor Games roster (10 agents) |
| **Total Duration** | 17 weeks (M0–M4) |
| **Current Phase** | M1 — First Playable |

---

## Milestone Map

```
╔══════════╗   ╔══════════════╗   ╔════════════════╗   ╔═══════════════════╗   ╔════════╗
║ M0 SPIKE ║──▶║ M1 FIRST     ║──▶║ M2 VERTICAL    ║──▶║ M3 CONTENT        ║──▶║ M4     ║
║ Week 1   ║   ║ PLAYABLE     ║   ║ SLICE          ║   ║ COMPLETE          ║   ║ GOLD   ║
║          ║   ║ Weeks 2–4    ║   ║ Weeks 5–9      ║   ║ Weeks 10–15       ║   ║ 16–17  ║
╚══════════╝   ╚══════════════╝   ╚════════════════╝   ╚═══════════════════╝   ╚════════╝
     │                │                  │                       │                   │
   Gate 0           Gate 1            Gate 2                  Gate 3             RELEASE
  "Viable?"      "Is it fun?"     "Does it hold?"        "Content freeze"    "Go/No-Go"
```

---

## M0 — Technical Spike (Week 1)

**Goal**: Validate the signal system architecture before committing production resources.

| # | Deliverable | Owner | Due | Status |
| :--- | :--- | :--- | :--- | :--- |
| 0.1 | Spike plan document | `TECHDIR` | Day 1 | [x] |
| 0.2 | Signal data schema (JSON) | `TECHDIR` | Day 1 | [x] |
| 0.3 | Signal processor prototype | `ENGINEER` | Day 3 | [x] |
| 0.4 | Automated tests (3 signals) | `ENGINEER` | Day 3 | [x] |
| 0.5 | Spike evaluation report | `TECHDIR` | Day 3 | [x] |

**Gate 0 criteria**: Passed. [DEC-2026-002](/artifacts/decisions/DEC-2026-002.md) authorizes M1.

---

## M1 — First Playable (Weeks 2–4)

**Goal**: Prove the core loop is fun, legible, and creates tension.

| # | Deliverable | Owner | Due | Depends On |
| :--- | :--- | :--- | :--- | :--- |
| 1.1 | Creative vision (final) | `CREATIVE` | Week 2 | Tone guide from NARRATIVE |
| 1.2 | Story bible v1 | `NARRATIVE` | Week 2 | Backstory directive from CREATIVE |
| 1.3 | Signal content: 5 signals + 3 consequences | `NARRATIVE` | Week 3 | Signal schema from TECHDIR |
| 1.4 | Feature spec: maintenance system | `DESIGNER` | Week 2 | — |
| 1.5 | Feature spec: signal system | `DESIGNER` | Week 2 | Spike results |
| 1.6 | Day/night cycle implementation | `ENGINEER` | Week 3 | Spec 1.4 |
| 1.7 | 5 maintenance tasks implementation | `ENGINEER` | Week 3 | Spec 1.4 |
| 1.8 | Signal system implementation | `ENGINEER` | Week 3 | Spec 1.5 + spike code |
| 1.9 | Dawn consequence implementation | `ENGINEER` | Week 4 | Content 1.3 |
| 1.10 | QA playtest pass | `QA` | Week 4 | All above |
| 1.11 | Design iteration response | `DESIGNER` | Week 4 | Playtest report |

**Gate 1 criteria**: A complete 3-day play session is functional. QA confirms the loop is engaging. CREATIVE confirms creative alignment. DESIGNER confirms the maintenance system creates meaningful decisions.

**Buffer**: 1 week (Week 5 start) for critical M1 iterations before M2 begins.

---

## M2 — Vertical Slice (Weeks 5–9)

**Goal**: 7 complete game-days with corrupted signals, preliminary UI, and full Act 1 narrative.

| # | Deliverable | Owner | Due |
| :--- | :--- | :--- | :--- |
| 2.1 | Corrupted signal design spec | `DESIGNER` | Week 5 |
| 2.2 | Event bus architecture (observation system) | `TECHDIR` | Week 5 |
| 2.3 | Event bus implementation | `ENGINEER` | Week 6 |
| 2.4 | 7 days of signal + consequence content | `NARRATIVE` + `DESIGNER` | Week 7 |
| 2.5 | Protagonist diary fragments | `NARRATIVE` | Week 7 |
| 2.6 | Style guide + UI concept | `ARTIST` | Week 6 |
| 2.7 | UI implementation | `ENGINEER` | Week 8 |
| 2.8 | Full QA pass + bug triage | `QA` + `PRODUCER` | Week 9 |

**Gate 2**: The vertical slice plays as a polished 7-day experience. DIRECTOR reviews creative trajectory.

---

## M3 — Content Complete (Weeks 10–15)

**Goal**: All 14 game-days, all signals, all endings, final content.

| # | Deliverable | Owner | Due |
| :--- | :--- | :--- | :--- |
| 3.1 | Full signal library (~70 signals) | `NARRATIVE` + `DESIGNER` | Week 13 |
| 3.2 | Full consequence library (~40 texts) | `NARRATIVE` | Week 13 |
| 3.3 | Endings design + implementation | `DESIGNER` + `ENGINEER` | Week 14 |
| 3.4 | Maintenance escalation curve (full) | `DESIGNER` + `ENGINEER` | Week 12 |
| 3.5 | UI polish | `ARTIST` + `ENGINEER` | Week 14 |
| 3.6 | Balance pass | `DESIGNER` | Week 15 |
| 3.7 | Full QA regression | `QA` | Week 15 |
| 3.8 | **Content freeze** | `PRODUCER` | Week 15 |

**Gate 3**: Content freeze. No new features or content. Only bug fixes and polish.

---

## M4 — Gold (Weeks 16–17)

**Goal**: Ship-ready. All bugs resolved, storefront prepared.

| # | Deliverable | Owner | Due |
| :--- | :--- | :--- | :--- |
| 4.1 | Final QA pass | `QA` | Week 16 |
| 4.2 | Bug sweep + triage | `QA` + `PRODUCER` | Week 16 |
| 4.3 | Release readiness checklist | `PRODUCER` | Week 17 |
| 4.4 | Storefront assets | `PUBLISHER` + `ARTIST` | Week 17 |
| 4.5 | Release notes | `PUBLISHER` | Week 17 |
| 4.6 | **Go/no-go decision** | `DIRECTOR` + Human | Week 17 |
| 4.7 | GitHub publish | `ENGINEER` + `PUBLISHER` | Week 17 |

---

## Status Cadence

| Report | Frequency | Owner | Location |
| :--- | :--- | :--- | :--- |
| Status report | Weekly | `PRODUCER` | `/artifacts/status_report_[date].md` |
| Risk register review | Per gate | `PRODUCER` | `risk_register.md` (this project) |
| Retrospective | Per milestone | All agents | `/artifacts/retro_[milestone].md` |

---

## Approval Trail

| Action | Date | Approved by |
| :--- | :--- | :--- |
| Greenlight condicional | 2026-03-30 | `DIRECTOR` (DEC-2026-001) |
| Preproduction kickoff | 2026-03-30 | `PRODUCER` (CONV-2026-002) |
| M0 start | 2026-03-30 | `TECHDIR` |

---

*Project Plan v1.0 — Handor Games Studio · `PRODUCER`*
