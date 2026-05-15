# jetlint.github.io — context

The marketing and documentation site for jetlint. Built with Astro. The
glossary below pins terms whose meaning has been deliberately chosen.

## Glossary

### Category

One of seven groupings rules belong to: `correctness`, `suspicious`,
`security`, `performance`, `complexity`, `style`, `nursery`. Defined in
the jetlint repo at `internal/rules/registry.go` and documented in
`docs/RULE-CATEGORIES.md`.

On the **site**, a category is a presentational/navigation aid only.
The rules page is organized by category; the homepage mentions the
taxonomy as a feature. Category-level config in `.jetlintrc.json`
(e.g. `{"categories": {"correctness": "error"}}`) is **planned but not
yet wired** — the site must not show that syntax as working.

### Recommended preset

A specific set of rules surfaced by `RecommendedIDs()` in the registry.
Distinct from the broader `correctness` category — not every
correctness rule is recommended, and recommended is opinionated about
default-on cost/value tradeoffs. On the site, this preset gets a
dedicated section at the top of the rules page; the same rules also
appear inside their category section with a ★ badge. Internal jargon
"MVP rules" is never user-facing — the term is **recommended preset**.

### Type-aware vs AST-only

A property of an individual rule. **Type-aware** rules call the
TypeScript checker; **AST-only** rules walk the AST without it. Today
co-extensive with source-of-port (every typescript-eslint port is
type-aware; every ESLint-core port is AST-only) but the two will
diverge as we author original AST-only rules. On the site, this
distinction is shown as a per-rule badge — chosen over a TSEC /
ESLint-core source badge because it speaks to the speed pitch and
remains true if the rule is later re-implemented.

Source-of-port is mentioned once near the top of the rules page, not
per-row.

### Orthogonal flags (current behavior)

Every rule has `recommended`, `requiresTypeChecking`, `fix`, and
`stability` flags. Today only the first two vary across the rule set
(`fix` is always `none`, `stability` always `stable`). The site shows
only the flags that actually vary; `fix` and `stability` get no
columns or badges until that changes.
