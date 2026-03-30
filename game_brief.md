# The Last Lighthouse Keeper — Game Brief

> **Author**: `CREATIVE` — Creative Director  
> **Status**: 📋 Draft — Pending DIRECTOR approval  
> **Date**: 2026-03-30  
> **Related**: [DEC-2026-001](/artifacts/decisions/DEC-2026-001.md) · [CONV-2026-001](/artifacts/conversations/CONV-2026-001.md) · [HO-2026-001](/handoffs/HO-2026-001.md)

---

## Title

**The Last Lighthouse Keeper**

## Logline

You are the last keeper of a forgotten lighthouse on a dying coast. By day, you maintain the light. By night, signals come from the sea — and they know things they shouldn't.

## Player Fantasy

**Solitude with purpose.** The player is the last person who cares about this light. That light is the only thing standing between someone — or something — and total darkness. The fantasy is not about power or skill. It is about *vigilance*, *judgment*, and the quiet weight of being the one who stayed.

## Core Loop

```
┌─────────────────────────────────────────────┐
│  DAY                                        │
│  Inspect → Repair → Manage resources →      │
│  Prepare the lighthouse for nightfall       │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  NIGHT                                      │
│  Receive signals → Interpret → Decide →     │
│  Respond (or don't)                         │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  DAWN                                       │
│  See the consequences of last night's       │
│  decisions → New world state                │
└──────────────────┬──────────────────────────┘
                   ↓
           (Repeat with escalation)
```

The loop escalates through three phases:

1. **Learning** (Days 1–3): Simple maintenance, clear signals. The player learns the space and the systems.
2. **Deterioration** (Days 4–7): Resources degrade. Repairs require trade-offs. Signals become ambiguous.
3. **Triage** (Days 8+): The lighthouse is failing. The player chooses what to save and what to sacrifice. Signals may no longer be trustworthy.

## Creative Pillars

| Pillar | What It Means |
| :--- | :--- |
| **Vigilance** | Every action is about paying attention. The game rewards observation and punishes neglect — not with game-overs, but with atmospheric consequences. |
| **Ambiguity** | The signals, the story, the world — nothing is fully explained. The player must interpret, decide, and live with uncertainty. |
| **Solitude as Strength** | Being alone is not a punishment. The keeper stayed for a reason. That reason is the emotional spine of the game. |

## Genre & References

**Genre**: Atmospheric narrative simulation · Mystery · Resource management lite

| Reference | What We Take |
| :--- | :--- |
| *Return of the Obra Dinn* | Deductive interpretation of incomplete information. The player pieces together truth from fragments. |
| *Firewatch* | Emotional intimacy in isolation. A single character, a vast landscape, and a voice that may or may not be trustworthy. |
| *Papers, Please* | Mechanical tension through mundane tasks with moral weight. Every stamp is a decision. Every signal is a stamp. |

## Scope Estimate

**Size: M (Medium)**

Justification:
- Core mechanics are data-driven and engine-agnostic — no physics, no AI combat, no multiplayer
- Narrative is branching but capped (3 branches × 12 nodes per game-day)
- Content volume is moderate: ~14 game-days, ~70 signals, ~40 consequence texts
- Art requirements are minimal in v1 (text + UI, atmospheric by design)
- Single-player, single-character, single-location

Total estimated production: **17 weeks** (5 milestones)

## Open Questions (Status: 🔒 Locked for M1)

1. **Signal mechanics**: Validated via M0 Spike (`DEC-2026-002`). Pure CLI selection parsing JSON branches.
2. **Endings**: How many endings? Is there a "true" ending or are all endings equally valid? (To be explored in M2).
3. **Audio**: Deferred intentionally. Not part of M1 loop validation.
4. **Art style**: Text-focused terminal rendering for v1, building atmospheric prose over raw image generation.
5. **Protagonist identity**: Solved via `CONV-2026-003` (Player knows *that* something happened, but not exactly *what* until the late-game anchor signals).

## Sensitive Content Note

This game explores themes of **isolation, memory, and loss**. The keeper's reason for staying may involve grief, guilt, or avoidance. These themes will be handled with dignity and care. A content note will be included at the start of the game. A dedicated sensitivity guide will be authored by NARRATIVE and reviewed by DIRECTOR before production begins.

---

*Game Brief v1.0 — Handor Games Studio*
