# The Last Lighthouse Keeper — Technical Spike Plan (M0)

> **Author**: `TECHDIR` — Technical Director  
> **Status**: ✅ Completed (M0 Closed)  
> **Date**: 2026-03-30  
> **Evaluation**: [m0_spike_evaluation.md](docs/m0_spike_evaluation.md)  
> **Responds to**: [HO-2026-002](/handoffs/HO-2026-002.md) · [CONV-2026-002](/artifacts/conversations/CONV-2026-002.md)  
> **Collaborator**: `ENGINEER`

---

## Purpose

This document is the execution plan for the M0 technical spike. The spike exists because DEC-2026-001 (greenlight condicional) requires validation of the signal system before committing production resources.

The spike does **not** build the game. It answers one question: **Can we build a signal system that is extensible, data-driven, and performant at the scale this game requires?**

---

## Scope — What the Spike Covers

| ✅ In Scope | ❌ Out of Scope |
| :--- | :--- |
| Signal data schema design | Game UI / CLI interface |
| Signal processor module (select, present, record) | Day/night cycle logic |
| Consequence resolver module | Maintenance system |
| 3 test signals with consequences | Resource management |
| Automated test suite | Art, audio, narrative content |
| Viability assessment for M2 event bus | Event bus implementation |
| Performance evaluation at 70-signal scale | Full content integration |

---

## Architecture Under Test

```
┌────────────────────────┐
│     SIGNAL POOL        │ ← signals.json (data file)
│  [Signal objects]      │
└───────────┬────────────┘
            │ selected by
┌───────────▼────────────┐
│   SIGNAL PROCESSOR     │
│                        │
│  • selectSignal(day,   │
│    gameState)          │
│  • presentSignal(sig)  │
│  • recordResponse(     │
│    sigId, action)      │
└───────────┬────────────┘
            │ feeds into
┌───────────▼────────────┐
│  CONSEQUENCE RESOLVER  │
│                        │
│  • resolve(sigId,      │
│    playerAction)       │
│  • applyStateChanges() │
└───────────┬────────────┘
            │ modifies
┌───────────▼────────────┐
│      GAME STATE        │
│  { day, phase, history │
│    resources, signals  │
│    consequences }      │
└────────────────────────┘
```

---

## Day-by-Day Spike Schedule

### Day 1 — Architecture & Schema (`TECHDIR`)

| Task | Output | Done |
| :--- | :--- | :--- |
| Define Signal data schema | `src/data/schema/signal_schema.json` | [x] |
| Define Consequence data schema | `src/data/schema/consequence_schema.json` | [x] |
| Define GameState structure | `src/data/schema/game_state_schema.json` | [x] |
| Write 3 test signals | `src/data/signals_spike.json` | [x] |
| Architecture doc with module interfaces | `technical_spike_plan.md` (this doc) | [x] |
| Evaluate lazy-loading strategy for 70-signal pool | Section in this doc | [x] |
| Assess M2 event bus feasibility (theoretical) | Section in this doc | [x] |

**ENGINEER prepares**: Test harness, project scaffolding, Node.js environment.

### Day 2 — Implementation (`ENGINEER` + `TECHDIR` review)

| Task | Output | Done |
| :--- | :--- | :--- |
| Implement SignalProcessor module | `src/core/signal_processor.js` | [x] |
| Implement ConsequenceResolver module | `src/core/consequence_resolver.js` | [x] |
| Implement GameState manager (minimal) | `src/core/game_state.js` | [x] |
| Wire modules: load signals → process → resolve | `src/core/spike_runner.js` | [x] |
| TECHDIR code review (end of day) | Review notes | [x] |

### Day 3 — Testing & Evaluation (`ENGINEER` + `TECHDIR`)

| Task | Output | Done |
| :--- | :--- | :--- |
| Write automated tests (3 signals × 2 actions = 6 cases) | `tests/spike/` | [x] |
| Scale test: load 70 synthetic signals, measure memory | Performance log | [x] |
| Extensibility test: add new signal type without parser changes | Test case | [x] |
| Write spike evaluation report | Section in this doc (updated) | [x] |
| CLI demo (if time permits — bonus) | `src/cli/spike_demo.js` | [Deferred to M1] |

---

## Signal Data Schema (Draft)

```json
{
  "$schema": "signal_v1",
  "signal": {
    "id": "string — unique identifier (e.g. SIG-001)",
    "day": "number — game day this signal appears",
    "type": "enum — genuine | ambiguous | false",
    "encoding": "enum — morse | visual | mixed (future)",
    "source": {
      "direction": "string — compass bearing (e.g. NE, SW)",
      "strength": "number — 1 (weak) to 5 (strong)"
    },
    "content": {
      "raw": "string — encoded signal (e.g. Morse dots/dashes)",
      "decoded": "string — human-readable decoded text"
    },
    "triggerCondition": "object | null — reserved for M2 event bus",
    "consequences": {
      "respond": {
        "outcomeText": "string — what the player sees at dawn",
        "stateChanges": ["array of {target, field, operation, value}"]
      },
      "ignore": {
        "outcomeText": "string",
        "stateChanges": ["array"]
      }
    },
    "metadata": {
      "narrativeLayer": "number — 1 (keeper), 2 (mystery), 3 (theme)",
      "isAnchor": "boolean — provides verifiable outcome (see CONV-2026-001)",
      "tags": ["array of strings for filtering"]
    }
  }
}
```

### Design Decisions

| Decision | Choice | Rationale |
| :--- | :--- | :--- |
| Consequences embedded in signal | Yes | Keeps signal self-contained; no cross-file lookups for M1 |
| `triggerCondition` field (null in M1) | Reserved | Allows M2 event bus integration without schema migration |
| `isAnchor` metadata flag | Yes | Supports DESIGNER's 2/3 ambiguous + 1/3 anchor rule |
| `narrativeLayer` field | Yes | Allows NARRATIVE to tag signals by story layer |

---

## Lazy Loading Strategy

**Problem**: Loading all 70 signals into memory at startup wastes resources.

**Solution**: Load signals on-demand by day. The signal pool file is read once and indexed by day number. Only the current day's signals are fully hydrated.

```
// Pseudocode
const signalIndex = indexByDay(loadJSON('signals.json'));
function getSignalsForDay(day) {
  return signalIndex[day] || [];
}
```

**Expected memory at 70 signals**: ~15MB (vs. ~400MB if all consequences are pre-resolved). Confirmed viable per ENGINEER's estimate in CONV-2026-002.

---

## M2 Event Bus Feasibility (Theoretical Assessment)

**Concept**: In M2, some signals should "react" to what the player did during the day (e.g., if the player cleaned the lens, tonight's signal mentions glass).

**Proposed architecture**:

```
Player Action → EventBus.emit('action', { type: 'clean_lens', ... })
                     ↓
              EventLog.record(action)
                     ↓
SignalProcessor.selectSignal() reads EventLog
                     ↓
Signals with triggerCondition matching EventLog entries are prioritized
```

**Assessment**: **Viable.** The event bus is a simple pub/sub pattern + persistent log. The `triggerCondition` field in the schema already accommodates this. Implementation estimate: 2 days for ENGINEER in M2.

**Risk**: Trigger conditions that are too complex could create hard-to-debug behavior. Mitigation: limit trigger conditions to simple field matches (e.g., `{ action: 'clean_lens', day: 'today' }`). No compound boolean logic in v1.

---

## Success Criteria

| # | Criterion | How We Verify |
| :--- | :--- | :--- |
| 1 | Signal processor correctly selects a signal for a given day | Automated test |
| 2 | Player response (respond/ignore) is recorded in game state | Automated test |
| 3 | Consequence resolver returns correct outcome for each response | Automated test (6 cases) |
| 4 | Adding a new signal type doesn't require parser changes | Manual test: add a 4th signal with new tags |
| 5 | 70 synthetic signals load and index in < 1 second | Performance test |
| 6 | Memory usage at 70 signals stays under 50MB | Performance test |
| 7 | Architecture supports future event bus without refactoring | Schema review (triggerCondition field exists) |

---

## Spike Evaluation Report

> **Status**: ✅ Completed — output generated
 
See full details in the separate evaluation artifact: [`docs/m0_spike_evaluation.md`](docs/m0_spike_evaluation.md).
- Performance metrics
- Identified risks and residual concerns
- Recommendation: proceed to M1 / proceed with modifications / stop and reassess

---

*Technical Spike Plan v1.0 — Handor Games Studio · `TECHDIR`*
