# Phoenix — Current State

**Last Updated:** 2026-07-27
**Model:** Claude Code CLI (primary) — see `CLAUDE.md` for the operating protocol
**Status:** Active

---

## What I Last Did

Added a memory-log field to the Section 0 personalization schema and Section 22 coaching instructions: distinct from the tracking log (raw numbers) and strategy log (experiment history), this is the ongoing narrative of actual sessions and progress, meant to be read before every response so coaching doesn't start cold each time.

## What Is Open Right Now

Confirming the bot integration correctly loads both this repo's protocol and the private personal data source (now including the memory log) together at runtime, and that writes-back (new recipes, workout variations, tracking entries, strategy notes, memory-log entries) land in the personal source, not here.

## What Did Not Work (and What I Learned)

- Early version of this repo included personal data directly (`USER.md`, `WORKOUTS.md`) before the generic/personal split was designed. Lesson: personal data source should be decided before the first commit, not retrofitted — retrofitting means a history rewrite, which is disruptive on a repo other people might already be watching.

## What Is Next

1. Verify end-to-end: protocol + personal data (including memory log) load together, coaching responses use real personal context
2. Start accumulating recipe/workout/strategy/memory history in the personal data source through real use
3. Revisit whether the Section 0 schema needs more/fewer fields once real coaching sessions surface gaps

## Key Files Updated This Cycle

- `CLAUDE.md` — added memory-log field (Section 0) and coaching instruction (Section 22)
- `BOOTSTRAP.md` — added memory log to the personal-source listing and write-back line
- `README.md` — this file

---

## Phoenix — Agent #1 of the Health Agent Family

Phoenix is the reference implementation for a family of standalone health agents — each one its own repo, own bot integration, own focused scope, personal data always kept in a private source outside the repo. See `BOOTSTRAP.md` for the replication pattern when standing up the next one.

---
*Updated after each completed session.*
