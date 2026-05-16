---
layout: ../layouts/Base.astro
title: Roadmap
description: jetlint's seven category Milestones, each tracking the rules and infra for one rule category.
---

# Roadmap

Work on jetlint is organized into seven **category Milestones** — one
per rule category in the [taxonomy](https://github.com/jetlint/jetlint/blob/main/docs/RULE-CATEGORIES.md).
Each Milestone collects the open issues for rules, infra, and
documentation that belong to that category. Open Milestones never
"complete" the way release Milestones do; they accumulate scope as
new upstream rules are identified, and the progress bar reflects what
has shipped versus what is still queued.

> Click any Milestone to see its open and closed issues, current
> progress, and any rules waiting for upstream work or new
> infrastructure.

## Active categories

### [correctness](https://github.com/jetlint/jetlint/milestone/1)

Code that is wrong: runtime bugs, undefined behavior, type holes. No
legitimate reason to write. The largest category, and the one users
expect to "just be on" — the recommended preset is drawn entirely
from correctness.

### [suspicious](https://github.com/jetlint/jetlint/milestone/2)

Code that smells. Usually wrong, occasionally intentional. The author
should justify or fix. Default severity is `warn`.

### [security](https://github.com/jetlint/jetlint/milestone/3)

Patterns enabling injection, eval, prototype pollution, or unsafe
deserialization. Currently one rule (`no-implied-eval`); expansion
tracks new upstream rules as they appear.

### [performance](https://github.com/jetlint/jetlint/milestone/4)

Known-slow patterns with a faster equivalent. No correctness impact.

### [complexity](https://github.com/jetlint/jetlint/milestone/5)

Needless complication with a simpler equivalent. No correctness or
performance impact.

### [style](https://github.com/jetlint/jetlint/milestone/6)

Formatting, naming, ordering. Pure preference; team-configurable.
Ships `off` by default.

### [a11y](https://github.com/jetlint/jetlint/milestone/7)

JSX accessibility rules. **Blocked on JSX support landing in
jetlint** — the Milestone exists so the work is visible, but no rules
will ship here until the underlying support is in place.

## Not tracked here

- **Releases.** Cut on schedule against the categories above; not
  themed Milestones in their own right.
- **`nursery` rules.** Rules still iterating live as issues in their
  destination category Milestone with a `stability: nursery` label,
  not as a separate Milestone.
- **Cross-cutting infra.** Daemon/LSP, formatter integration, editor
  packages — tracked as their own issues without a category
  Milestone, since they don't slot into one of the seven.

The full rule catalog and current compatibility numbers are on the
[rules page](/rules/); the categorization rubric that decides where a
rule lands is in
[`docs/RULE-CATEGORIES.md`](https://github.com/jetlint/jetlint/blob/main/docs/RULE-CATEGORIES.md).
