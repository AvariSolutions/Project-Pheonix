# Phoenix — Current State

**Last Updated:** 2026-07-27
**Model:** Claude Code CLI (primary) — see `CLAUDE.md` for the operating protocol
**Status:** Active

---

## What I Last Did

Restructured this repo into a generic, personal-data-free protocol: `CLAUDE.md` now defines the coaching methodology, response format, and a Section 0 schema of what personal fields a deployment needs — with no names, numbers, or personal history in the repo itself. All personal data (profile, recipes, workout history, tracking log, strategy log) moved to a private data source kept entirely outside this repo. Git history was rewritten to remove earlier commits that had included personal data before this split existed.

## What Is Open Right Now

Confirming the bot integration correctly loads both this repo's protocol and the private personal data source together at runtime, and that writes-back (new recipes, workout variations, weekly strategy notes) land in the personal source, not here.

## What Did Not Work (and What I Learned)

- Early version of this repo included personal data directly (`USER.md`, `WORKOUTS.md`) before the generic/personal split was designed. Lesson: personal data source should be decided before the first commit, not retrofitted — retrofitting means a history rewrite, which is disruptive on a repo other people might already be watching.

## What Is Next

1. Verify end-to-end: protocol + personal data load together, coaching responses use real personal context
2. Start accumulating recipe/workout/strategy history in the personal data source through real use
3. Revisit whether the Section 0 schema needs more/fewer fields once real coaching sessions surface gaps

## Key Files Updated This Cycle

- `CLAUDE.md` — rewritten as a generic protocol (no personal data)
- `BOOTSTRAP.md` — rewritten to describe loading a personal data source without naming its location
- `README.md` — this file
- `USER.md`, `WORKOUTS.md` — removed (personal data, moved to private source)

---

## Phoenix — Agent #1 of the Health Agent Family

Phoenix is the reference implementation for a family of standalone health agents — each one its own repo, own bot integration, own focused scope, personal data always kept in a private source outside the repo. See `BOOTSTRAP.md` for the replication pattern when standing up the next one.

---
*Updated after each completed session.*
