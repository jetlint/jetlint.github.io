# 0001 — Categories on the site are a presentation aid, not a config feature

- **Status:** Accepted
- **Date:** 2026-05-15

## Context

The jetlint repo (`internal/rules/registry.go`,
`docs/RULE-CATEGORIES.md`) defines seven rule categories — correctness,
suspicious, security, performance, complexity, style, nursery — plus
four orthogonal flags (recommended, requiresTypeChecking, fix,
stability). The decision rubric, per-rule assignments, and a planned
config shape (`{"categories": {"correctness": "error"}}`) are all
documented there.

But the config plumbing for `"categories": {...}` is **not** wired into
`internal/config/`, and there is no `--category` CLI flag. Today
`.jetlintrc.json` only accepts rule-level severity. Category-level
severity is a planned feature with no shipping code.

When updating the site to "capture the direction we've taken jetlint
in today: categories", we faced a fork:

1. Treat categories as a presentation aid only — reorganize the rules
   page by category, surface the taxonomy on the homepage, but do not
   show category-level config syntax as if it works.
2. Block the site update on shipping the config plumbing first, then
   advertise both organization and config in one coherent story.
3. Document the planned config shape on the site marked "planned for
   v0.x", letting it get external review before it ships.

## Decision

We chose option 1.

- The rules page is reorganized category-first (top section:
  recommended preset; below: one section per category with the full
  rule list and ★ badges on the recommended rules).
- The homepage gains a dedicated strip ("67 rules in 7 categories")
  with chips and a recommended-preset call-out.
- The config page renames "MVP rules" to "recommended preset" but
  shows only the rule-level config that actually runs. A brief
  "Coming next: category-level severity" section at the end shows
  the planned shape with an explicit caveat that it is not yet
  wired.

## Consequences

**Positive**

- Every claim on the site corresponds to runnable code today. A
  reader copying snippets gets working behavior.
- We can ship the categories direction this week without waiting on
  the config plumbing.
- The "Coming next" caveat invites feedback on the planned shape
  before it ships, with no risk of users depending on a syntax that
  doesn't run.

**Negative**

- The pitch is less clean than option 2 would have been. A reader who
  expects to enable a whole category at once will find they still
  have to list rules individually.
- We commit to landing the config plumbing later. If priorities shift
  and that work slips, the "Coming next" line ages awkwardly.

**Mitigation**

- The "Coming next" line should be removed (or moved to a roadmap
  page) if category-level config has not shipped within two releases
  of writing this ADR. Treat its presence as a small commitment, not
  a permanent fixture.

## Alternatives considered

- **Option 2 (block on plumbing).** Cleaner story but blocks the site
  update on backend work that has its own design questions
  (precedence between rule-level and category-level severity, error
  reporting for unknown category keys, CLI flag shape). Not worth
  the delay.
- **Option 3 (document the planned shape on the site).** Risks
  readers depending on syntax that doesn't run, especially if the
  page is found via search without the surrounding "planned" framing.
