# Phoenix — Current State

**Last Updated:** 2026-07-28
**Model:** Claude Code CLI (primary) — see `CLAUDE.md` for the operating protocol
**Status:** Active

---

## What I Last Did

Added Workout Research & Recommendation (Section 12): when asked an open-ended "what should I work on," the agent checks recent training history and the existing workout library first, researches 2–3 concrete options via web search if something new is actually needed, presents them conversationally instead of a report format, and logs whatever gets used to a growing workout-library index. Also fixed a real bug in the deployment (private, not this repo): the Claude Code CLI binary path was hardcoded to a specific version and had gone stale after an auto-update, silently degrading every call to the weaker fallback model for an unknown period.

## What Is Open Right Now

First live use of workout recommendations — confirming the research-then-log loop actually works end to end, and that the library index is genuinely being built up rather than staying empty.

## What Did Not Work (and What I Learned)

- Early version of this repo included personal data directly (`USER.md`, `WORKOUTS.md`) before the generic/personal split was designed. Lesson: personal data source should be decided before the first commit, not retrofitted — retrofitting means a history rewrite, which is disruptive on a repo other people might already be watching.
- The deployment's Claude Code CLI binary path was hardcoded to one version folder and silently broke on the next auto-update — every call fell back to a weaker model with no error surfaced to the user. Lesson: never hardcode a path that a third-party auto-updater owns; resolve it dynamically at startup instead.

## What Is Next

1. Verify the `[MEAL:]` tag round-trip end to end: reported food → calculated totals → running daily total → evening finalize to the nutrition log
2. Verify a live workout-recommendation request actually researches, presents options, and writes an entry to the workout library
3. Curtis finishes MacroDroid setup (Health Connect permissions + deep-link macro) for automated device reports

## Key Files Updated This Cycle

- `CLAUDE.md` — added Workout Research & Recommendation (Section 12), updated workout-library field (Section 0)
- `BOOTSTRAP.md` — noted workout library now includes a researched index, added a note on web-search capability being deployment-provided, not a bundled tool
- `README.md` — this file

---

## Phoenix — Agent #1 of the Health Agent Family

Phoenix is the reference implementation for a family of standalone health agents — each one its own repo, own bot integration, own focused scope, personal data always kept in a private source outside the repo. See `BOOTSTRAP.md` for the replication pattern when standing up the next one.

---
*Updated after each completed session.*
