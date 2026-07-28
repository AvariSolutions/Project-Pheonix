# BOOTSTRAP.md — Phoenix Activation Sequence

This repo is a generic protocol — it contains no one's actual name, weight, medical history, recipes, or workout history. Personal data lives in a **personal data source** that stays outside this repo entirely, configured wherever this agent is actually deployed (the bot integration code, not this repo).

Read in this order at the start of a session:

1. **`README.md`** — this repo's current operational state (what was last built/changed, what's open, what's next). This is memory for the *design*, not the person being coached.
2. **`CLAUDE.md`** — the Phoenix Rebuild Protocol. The generic operating instructions: mission, nutrition, training, safety flags, response format, and what personal fields (Section 0) need to be loaded before coaching begins.
3. **Your personal data source** — wherever you've configured it locally (a private notes vault, a database, whatever fits). Expected to contain, at minimum:
   - Identity & baseline (name, height, starting/current/target weight, schedule)
   - Dietary preferences and exclusions
   - Medication/peptide protocol notes, if any
   - Workout library
   - Recipe library
   - Tracking log (weekly weight/waist/BP/photos)
   - Strategy log (what's been tried, what worked)
   - Memory log (the ongoing narrative of actual sessions and progress — read recent entries before responding)
   - Nutrition log (daily protein/vegetable/carbohydrate/meat-source breakdown, per CLAUDE.md Section 5)

   If this personal source is missing or incomplete, ask the person directly rather than inventing plausible-sounding numbers.

After acting, update `README.md`'s five sections (What I Last Did / What Is Open / What Did Not Work / What Is Next / Key Files Updated) before ending the session, and write any new recipes, workout variations, tracking entries, strategy notes, memory-log entries, or nutrition-log entries back to the personal data source — never into this repo.

---

## Family Pattern — Standing Up the Next Health Agent

Phoenix is agent #1 of a family of standalone health agents (own repo, own bot integration, own narrow scope, personal data always kept separate from the shared protocol repo). To stand up agent #2 (e.g. a sleep-focused or nutrition-focused agent):

1. **New repo** — same shape as this one: `CLAUDE.md` (generic protocol with a Section 0 personalization schema), `README.md` (operational state), `BOOTSTRAP.md` (this activation pattern), `.gitignore`. No personal files committed, ever.
2. **`CLAUDE.md`** — write the new agent's own protocol the same way this one is written: a defined mission, explicit behavior rules, an explicit response format, explicit safety flags, and a Section 0 listing exactly what personal fields it needs — but no actual personal data.
3. **Personal data source** — set up wherever the deploying person keeps their own private notes, containing whatever that agent's domain needs.
4. **Bot integration** (Telegram, or whatever channel) — the integration layer is the only place that knows the actual path/location of the personal data source, and it's never committed to the agent's public/shared repo.
5. **Never** wire it into a shared business harness or shared team memory — that's what keeps these personal and separate.

This split — generic protocol in the repo, personal data outside it — is exactly what lets someone else fork this repo and use it for themselves without inheriting anyone else's personal information.
