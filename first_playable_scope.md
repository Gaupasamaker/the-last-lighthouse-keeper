# The Last Lighthouse Keeper — First Playable Scope (M1)

> **Authors**: `DESIGNER` + `PRODUCER`  
> **Status**: ✅ Active  
> **Version**: 1.0  
> **Date**: 2026-03-30  
> **Responds to**: [CONV-2026-002](/artifacts/conversations/CONV-2026-002.md)

---

## Objective

Prove the core loop is **fun, legible, and creates tension** using the minimum viable content slice. M1 is a validation instrument, not a demo.

After M1, we must be able to answer YES to all five:

1. Does the day/night cycle create meaningful rhythm?
2. Do maintenance tasks feel like decisions, not chores?
3. Do signals create genuine tension through ambiguity?
4. Does the dawn reveal create a satisfying feedback moment?
5. Would the player want to play Day 4?

---

## Content Boundaries

### ✅ Included in M1

| System | Content | Details |
| :--- | :--- | :--- |
| Day/Night Cycle | 3 full game-days | Day → Night → Dawn with state transitions |
| Maintenance | 5 tasks | See task table below |
| Resources | 3 types | Fuel, Tools, Parts |
| Degradation | Linear | 1 system degrades per day |
| Signals | 5 total | 2 genuine, 2 ambiguous, 1 false |
| Decisions | Binary per signal | Respond (aim beam) or Ignore |
| Consequences | 3 reveals | 1 per dawn |
| Interface | CLI (`src/cli/index.js`) | Validated in CONV-2026-003, assigned via HO-2026-005. No graphical assets yet. |

### ❌ Deferred to M2+

| Element | Why |
| :--- | :--- |
| Corrupted / symbolic signals | Needs validated signal system + narrative design |
| Protagonist backstory / diary | Narrative Layer 1 — story bible must be complete |
| Event bus (signals react to player) | Highest tech risk — architecture only in M0 |
| Art assets | Engine-agnostic v1 |
| Audio / soundscape | Not needed for loop validation |
| Multiple endings | Structural decision deferred |
| Branching beyond signal response | Needs ramification limits implemented |

---

## The 5 Maintenance Tasks

Agreed in CONV-2026-002: no narrative weight in M1 tasks. Purely mechanical.

| # | Task | Resource Cost | Effect | Failure Consequence |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Clean the lens** | 1 Tool use | Lens clarity → 100% | Signal reception degrades (text partially garbled) |
| 2 | **Refill fuel** | 15 Fuel units | Fuel tank restored | Lamp dims → weaker signal response reach |
| 3 | **Lubricate gears** | 1 Tool use | Rotation mechanism → smooth | Lamp rotation stutters → may miss signal direction |
| 4 | **Repair railing** | 2 Parts | Gallery safety → restored | No gameplay effect — a canary task. Skipping it is always "safe"… in M1. |
| 5 | **Check signal lamp** | 1 Part | Signal response lamp → functional | Cannot respond to signals if lamp is broken |

### Design intent

- Tasks 1, 2, 3, and 5 have gameplay consequences. They're real decisions.
- Task 4 (railing) is deliberately inert in M1. Its purpose: teach the player that not every task matters equally, and that resource allocation is about *judgment*. In M2, the railing's state will matter — but the player who skipped it in M1 will have learned a lesson they'll regret.
- **Time slots per day: 3.** The player cannot do all 5 tasks. They must choose.

---

## Resource Economy

| Resource | Starting Amount | Consumed How | Replenished? |
| :--- | :--- | :--- | :--- |
| **Fuel** | 50 units | Lamp costs 20/night + 15 per refill task | No (in M1) |
| **Tools** | 5 uses | 1 use per lens or gear task | No |
| **Parts** | 4 units | 1–2 per repair task | No |

### Scarcity curve

| Day | Fuel remaining (best case) | Tools remaining | Parts remaining |
| :--- | :--- | :--- | :--- |
| Start | 50 | 5 | 4 |
| After Day 1 | 45 (refilled) or 30 (skipped) | 4 or 3 | 4 or 2 |
| After Day 2 | 30 or 10 | 3 or 1 | 3 or 0 |
| After Day 3 | 15 or 0 | 2 or 0 | 2 or 0 |

By Day 3, the player **cannot maintain everything**. That's when maintenance becomes triage. That's when the game gets interesting.

---

## Gameplay Flow — One Full Day

### ☀️ DAY (Player-driven, 3 action slots)

```
1. STATUS DASHBOARD
   → View lighthouse systems: lens, fuel, gears, railing, signal lamp
   → Each shows health (%) and degradation since last day
   → View resource inventory

2. TASK SELECTION (choose 3 of 5)
   → Player picks which tasks to perform
   → Each task shows resource cost and effect
   → Unperformed tasks: associated system degrades further

3. CONFIRM AND ADVANCE
   → "Light the lamp" → initiates night phase
```

### 🌙 NIGHT (Event-driven, 1 signal per night)

```
1. SIGNAL ARRIVES
   → Morse code displayed, then decoded text
   → Source direction, signal strength shown
   → If lens quality is low: text partially garbled

2. PLAYER DECIDES
   → RESPOND: aim lighthouse beam toward signal source
     (only if signal lamp is functional)
   → IGNORE: keep beam on default rotation

3. NIGHT PASSES
   → Brief atmospheric text
   → Transition to dawn
```

### 🌅 DAWN (Consequence)

```
1. REVEAL
   → Text describes what was found in the signal's direction
   → Outcome depends on signal type + player action
   → Genuine signals: clear outcome
   → Ambiguous signals: partial outcome
   → False signals: nothing — or something that raises questions

2. STATE UPDATE
   → Systems degrade overnight
   → Resource totals adjust
   → New day begins
```

---

## Tuning Parameters

| Parameter | Default | Notes |
| :--- | :--- | :--- |
| `days_in_m1` | 3 | Minimum to show escalation |
| `tasks_available_per_day` | 5 | All tasks available daily |
| `task_slots_per_day` | 3 | Time constraint |
| `fuel_per_night` | 20 | Lamp operating cost |
| `fuel_refill_amount` | 15 | Never fully restores — intentional |
| `tool_durability` | 1 use each | 5 total uses, then gone |
| `signals_per_night` | 1 | Keep focused for M1 |
| `degradation_per_day` | 1 system, -20% health | Predictable in M1 |

All values are tuning dials. DESIGNER adjusts post-playtest.

---

## Acceptance Criteria

| # | Criterion | Verified by |
| :--- | :--- | :--- |
| 1 | Player completes 3 day/night/dawn cycles without errors | `QA` — functional test |
| 2 | All 5 maintenance tasks work with correct resource costs | `QA` — functional test |
| 3 | All 5 signals are received, decoded, and respondable | `QA` — functional test |
| 4 | At least 1 dawn consequence reflects the player's decision | `QA` — playtest |
| 5 | By Day 3, player cannot do all tasks (scarcity confirmed) | `DESIGNER` — balance check |
| 6 | Total play session: 15–25 minutes | `QA` — timed playtest |
| 7 | QA structured playtest report delivered | `QA` — process |

---

*First Playable Scope v1.0 — Handor Games Studio · `DESIGNER` + `PRODUCER`*
