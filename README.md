# Phoenix — Current State

**Last Updated:** 2026-07-28
**Model:** Claude Code CLI (primary) — see `CLAUDE.md` for the operating protocol
**Status:** Active

---

## What I Last Did

Added a real nutrition calculator: `tools/nutrition_calculator.js` + `tools/food_database.json`, a deterministic carbs/calories/protein/fat lookup-and-sum tool (generic staple foods, no personal data). CLAUDE.md now instructs the agent to emit a `[MEAL:]` tag when food is reported instead of estimating numbers itself — the bot integration runs the actual calculation, accumulates a running daily total, and finalizes it to the nutrition log automatically at the evening check-in.

## What Is Open Right Now

Wiring the `[MEAL:]` tag processor, daily accumulator, and evening finalize-to-personal-source step into the bot integration (private, not in this repo). Also still pending: Curtis's MacroDroid setup for automated device reports (Section 19).

## What Did Not Work (and What I Learned)

- Early version of this repo included personal data directly (`USER.md`, `WORKOUTS.md`) before the generic/personal split was designed. Lesson: personal data source should be decided before the first commit, not retrofitted — retrofitting means a history rewrite, which is disruptive on a repo other people might already be watching.

## What Is Next

1. Verify the `[MEAL:]` tag round-trip end to end: reported food → calculated totals → running daily total → evening finalize to the nutrition log
2. Extend `food_database.json` as real meals surface foods it doesn't recognize
3. Curtis finishes MacroDroid setup (Health Connect permissions + deep-link macro) for automated device reports

## Key Files Updated This Cycle

- `tools/nutrition_calculator.js`, `tools/food_database.json` — new deterministic calculator
- `CLAUDE.md` — Daily Nutrition Metric now calculated not estimated (Section 5), `[MEAL:]` tag instruction, Daily Nutrition Finalization (Section 19), updated Response Format (Section 25)
- `BOOTSTRAP.md` — added Tools section documenting the calculator for forkers
- `README.md` — this file

---

## Phoenix — Agent #1 of the Health Agent Family

Phoenix is the reference implementation for a family of standalone health agents — each one its own repo, own bot integration, own focused scope, personal data always kept in a private source outside the repo. See `BOOTSTRAP.md` for the replication pattern when standing up the next one.

---
*Updated after each completed session.*
