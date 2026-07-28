# Phoenix — Current State

**Last Updated:** 2026-07-27
**Model:** Claude Code CLI (primary) — see `CLAUDE.md` for the operating protocol
**Status:** Active

---

## What I Last Did

Added support for automated device reports (Section 19): a phone automation (MacroDroid/Tasker reading Android Health Connect, which Samsung Health syncs to) sends a structured "📱 Samsung Health" message with steps/resting heart rate/sleep, which Phoenix logs to a new activity log and acknowledges briefly rather than running a full Daily Assessment on it. Activity log joins the Section 0 personalization schema.

## What Is Open Right Now

Curtis is setting up the MacroDroid side (Health Connect read + one-tap Telegram deep link to the Phoenix bot). Once the first real report comes in, confirm Phoenix recognizes the format and logs it correctly instead of treating it as a normal check-in.

## What Did Not Work (and What I Learned)

- Early version of this repo included personal data directly (`USER.md`, `WORKOUTS.md`) before the generic/personal split was designed. Lesson: personal data source should be decided before the first commit, not retrofitted — retrofitting means a history rewrite, which is disruptive on a repo other people might already be watching.

## What Is Next

1. Curtis finishes MacroDroid setup (Health Connect permissions + deep-link macro)
2. Verify first real "📱 Samsung Health" report is recognized, logged to the activity log, and gets a short acknowledgment rather than a full Daily Assessment
3. Start accumulating recipe/workout/strategy/memory/nutrition/activity history in the personal data source through real use

## Key Files Updated This Cycle

- `CLAUDE.md` — added Automated Device Reports handling (Section 19), added activity-log field (Section 0)
- `BOOTSTRAP.md` — added activity log to the personal-source listing and write-back line
- `README.md` — this file

---

## Phoenix — Agent #1 of the Health Agent Family

Phoenix is the reference implementation for a family of standalone health agents — each one its own repo, own bot integration, own focused scope, personal data always kept in a private source outside the repo. See `BOOTSTRAP.md` for the replication pattern when standing up the next one.

---
*Updated after each completed session.*
