---
layout: ../layouts/Base.astro
title: Rules
description: All 68 jetlint rules, organized into 7 categories. 5 in the recommended preset; the rest opt-in.
---

# Rules

jetlint ships **68 rules** organized into **7 categories**. Five rules
form the **recommended preset** and fire at `error` severity by
default; every other rule is `off` until opted in via
[`.jetlintrc.json`](/config/).

**Compatibility.** 6193 / 6193 typescript-eslint fixtures pass, plus
693 / 705 oxlint fixtures for the AST-only ports — **6886 / 6898
(99.8%)** in total. Every rule's score is reproducible from the
[jetlint repo](https://github.com/jetlint/jetlint).

**Origin.** Every type-aware rule was ported from
[typescript-eslint](https://typescript-eslint.io/); every AST-only
rule was ported from [ESLint core](https://eslint.org/). The
distinction the rule pages care about is **type-aware vs AST-only**
(does the rule cost a TypeScript program load?) so that's what each
row below shows.

## Recommended preset

These five fire by default. They map to the consensus between
typescript-eslint's `recommendedTypeChecked` and oxc's `correctness`
category — rules upstream tools agree are bug-finders, not
opinionated style.

| Rule | Fixtures | Catches |
|---|---:|---|
| [`await-thenable`](https://typescript-eslint.io/rules/await-thenable) | 121 / 121 | `await` on a non-thenable. The `await` is a no-op. |
| [`no-base-to-string`](https://typescript-eslint.io/rules/no-base-to-string) | 315 / 315 | Implicit `Object.prototype.toString()` calls that yield `"[object Object]"`. |
| [`no-floating-promises`](https://typescript-eslint.io/rules/no-floating-promises) | 175 / 175 | Promises that aren't awaited, returned, voided, or chained. |
| [`no-misused-promises`](https://typescript-eslint.io/rules/no-misused-promises) | 215 / 215 | Promises passed where a sync value is expected (`if (promise)`, spread into args, etc.). |
| [`no-unsafe-assignment`](https://typescript-eslint.io/rules/no-unsafe-assignment) | 91 / 91 | Assigning `any`-typed values into typed variables — bypasses the rest of the type system. |

To turn off any recommended rule, set it to `off` in your config; to
add others, opt in by name. See [Config](/config/).

## All rules, by category

The seven categories follow the rubric in
[`docs/RULE-CATEGORIES.md`](https://github.com/jetlint/jetlint/blob/main/docs/RULE-CATEGORIES.md):
the first matching framing wins, with `correctness` beating
`performance` beating `complexity` for cross-cutting rules. A ★
marks rules in the recommended preset.

### correctness — 31 rules

Code that is wrong: runtime bugs, undefined behavior, type holes. No
legitimate reason to write.

| Rule | Mode | Fixtures |
|---|:-:|---:|
| [`array-callback-return`](https://eslint.org/docs/latest/rules/array-callback-return) | AST-only | 229 / 241 |
| ★ [`await-thenable`](https://typescript-eslint.io/rules/await-thenable) | type-aware | 121 / 121 |
| [`consistent-return`](https://typescript-eslint.io/rules/consistent-return) | type-aware | 30 / 30 |
| [`no-array-delete`](https://typescript-eslint.io/rules/no-array-delete) | type-aware | 29 / 29 |
| ★ [`no-base-to-string`](https://typescript-eslint.io/rules/no-base-to-string) | type-aware | 315 / 315 |
| [`no-dupe-keys`](https://eslint.org/docs/latest/rules/no-dupe-keys) | AST-only | 50 / 50 |
| [`no-duplicate-case`](https://eslint.org/docs/latest/rules/no-duplicate-case) | AST-only | 30 / 30 |
| ★ [`no-floating-promises`](https://typescript-eslint.io/rules/no-floating-promises) | type-aware | 175 / 175 |
| [`no-for-in-array`](https://typescript-eslint.io/rules/no-for-in-array) | type-aware | 22 / 22 |
| ★ [`no-misused-promises`](https://typescript-eslint.io/rules/no-misused-promises) | type-aware | 215 / 215 |
| [`no-misused-spread`](https://typescript-eslint.io/rules/no-misused-spread) | type-aware | 128 / 128 |
| [`no-mixed-enums`](https://typescript-eslint.io/rules/no-mixed-enums) | type-aware | 51 / 51 |
| [`no-self-assign`](https://eslint.org/docs/latest/rules/no-self-assign) | AST-only | 92 / 92 |
| [`no-self-compare`](https://eslint.org/docs/latest/rules/no-self-compare) | AST-only | 24 / 24 |
| [`no-unsafe-argument`](https://typescript-eslint.io/rules/no-unsafe-argument) | type-aware | 42 / 42 |
| ★ [`no-unsafe-assignment`](https://typescript-eslint.io/rules/no-unsafe-assignment) | type-aware | 91 / 91 |
| [`no-unsafe-call`](https://typescript-eslint.io/rules/no-unsafe-call) | type-aware | 38 / 38 |
| [`no-unsafe-enum-comparison`](https://typescript-eslint.io/rules/no-unsafe-enum-comparison) | type-aware | 85 / 85 |
| [`no-unsafe-member-access`](https://typescript-eslint.io/rules/no-unsafe-member-access) | type-aware | 35 / 35 |
| [`no-unsafe-return`](https://typescript-eslint.io/rules/no-unsafe-return) | type-aware | 62 / 62 |
| [`no-unsafe-unary-minus`](https://typescript-eslint.io/rules/no-unsafe-unary-minus) | type-aware | 23 / 23 |
| [`only-throw-error`](https://typescript-eslint.io/rules/only-throw-error) | type-aware | 89 / 89 |
| [`prefer-promise-reject-errors`](https://typescript-eslint.io/rules/prefer-promise-reject-errors) | type-aware | 161 / 161 |
| [`related-getter-setter-pairs`](https://typescript-eslint.io/rules/related-getter-setter-pairs) | type-aware | 23 / 23 |
| [`require-array-sort-compare`](https://typescript-eslint.io/rules/require-array-sort-compare) | type-aware | 33 / 33 |
| [`require-await`](https://typescript-eslint.io/rules/require-await) | type-aware | 54 / 54 |
| [`strict-void-return`](https://typescript-eslint.io/rules/strict-void-return) | type-aware | 210 / 210 |
| [`switch-exhaustiveness-check`](https://typescript-eslint.io/rules/switch-exhaustiveness-check) | type-aware | 104 / 104 |
| [`use-isnan`](https://eslint.org/docs/latest/rules/use-isnan) | AST-only | 208 / 208 |
| [`use-unknown-in-catch-callback-variable`](https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable) | type-aware | 56 / 56 |
| [`valid-typeof`](https://eslint.org/docs/latest/rules/valid-typeof) | AST-only | 60 / 60 |

### suspicious — 9 rules

Code that smells. Usually wrong, occasionally intentional. The author
should justify or fix.

| Rule | Mode | Fixtures |
|---|:-:|---:|
| [`no-confusing-void-expression`](https://typescript-eslint.io/rules/no-confusing-void-expression) | type-aware | 108 / 108 |
| [`no-deprecated`](https://typescript-eslint.io/rules/no-deprecated) | type-aware | 262 / 262 |
| [`no-unsafe-type-assertion`](https://typescript-eslint.io/rules/no-unsafe-type-assertion) | type-aware | 15 / 15 |
| [`promise-function-async`](https://typescript-eslint.io/rules/promise-function-async) | type-aware | 53 / 53 |
| [`restrict-plus-operands`](https://typescript-eslint.io/rules/restrict-plus-operands) | type-aware | 119 / 119 |
| [`restrict-template-expressions`](https://typescript-eslint.io/rules/restrict-template-expressions) | type-aware | 79 / 79 |
| [`return-await`](https://typescript-eslint.io/rules/return-await) | type-aware | 95 / 95 |
| [`strict-boolean-expressions`](https://typescript-eslint.io/rules/strict-boolean-expressions) | type-aware | 214 / 214 |
| [`unbound-method`](https://typescript-eslint.io/rules/unbound-method) | type-aware | 202 / 202 |

### security — 1 rule

Patterns enabling injection, eval, prototype pollution, or unsafe
deserialization.

| Rule | Mode | Fixtures |
|---|:-:|---:|
| [`no-implied-eval`](https://typescript-eslint.io/rules/no-implied-eval) | type-aware | 70 / 70 |

### performance — 4 rules

Known-slow patterns with a faster equivalent. No correctness impact.

| Rule | Mode | Fixtures |
|---|:-:|---:|
| [`prefer-find`](https://typescript-eslint.io/rules/prefer-find) | type-aware | 45 / 45 |
| [`prefer-includes`](https://typescript-eslint.io/rules/prefer-includes) | type-aware | 42 / 42 |
| [`prefer-regexp-exec`](https://typescript-eslint.io/rules/prefer-regexp-exec) | type-aware | 37 / 37 |
| [`prefer-string-starts-ends-with`](https://typescript-eslint.io/rules/prefer-string-starts-ends-with) | type-aware | 123 / 123 |

### complexity — 17 rules

Needless complication with a simpler equivalent. No correctness or
perf impact.

| Rule | Mode | Fixtures |
|---|:-:|---:|
| [`no-duplicate-type-constituents`](https://typescript-eslint.io/rules/no-duplicate-type-constituents) | type-aware | 82 / 82 |
| [`no-redundant-type-constituents`](https://typescript-eslint.io/rules/no-redundant-type-constituents) | type-aware | 104 / 104 |
| [`no-unnecessary-boolean-literal-compare`](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare) | type-aware | 45 / 45 |
| [`no-unnecessary-condition`](https://typescript-eslint.io/rules/no-unnecessary-condition) | type-aware | 296 / 296 |
| [`no-unnecessary-qualifier`](https://typescript-eslint.io/rules/no-unnecessary-qualifier) | type-aware | 17 / 17 |
| [`no-unnecessary-template-expression`](https://typescript-eslint.io/rules/no-unnecessary-template-expression) | type-aware | 71 / 71 |
| [`no-unnecessary-type-arguments`](https://typescript-eslint.io/rules/no-unnecessary-type-arguments) | type-aware | 71 / 71 |
| [`no-unnecessary-type-assertion`](https://typescript-eslint.io/rules/no-unnecessary-type-assertion) | type-aware | 223 / 223 |
| [`no-unnecessary-type-conversion`](https://typescript-eslint.io/rules/no-unnecessary-type-conversion) | type-aware | 66 / 66 |
| [`no-unnecessary-type-parameters`](https://typescript-eslint.io/rules/no-unnecessary-type-parameters) | type-aware | 160 / 160 |
| [`no-useless-default-assignment`](https://typescript-eslint.io/rules/no-useless-default-assignment) | type-aware | 83 / 83 |
| [`non-nullable-type-assertion-style`](https://typescript-eslint.io/rules/non-nullable-type-assertion-style) | type-aware | 20 / 20 |
| [`prefer-destructuring`](https://typescript-eslint.io/rules/prefer-destructuring) | type-aware | 92 / 92 |
| [`prefer-nullish-coalescing`](https://typescript-eslint.io/rules/prefer-nullish-coalescing) | type-aware | 617 / 617 |
| [`prefer-optional-chain`](https://typescript-eslint.io/rules/prefer-optional-chain) | type-aware | 45 / 45 |
| [`prefer-reduce-type-parameter`](https://typescript-eslint.io/rules/prefer-reduce-type-parameter) | type-aware | 31 / 31 |
| [`prefer-return-this-type`](https://typescript-eslint.io/rules/prefer-return-this-type) | type-aware | 21 / 21 |

### style — 6 rules

Formatting, naming, ordering. Pure preference; team-configurable.

| Rule | Mode | Fixtures |
|---|:-:|---:|
| [`consistent-type-exports`](https://typescript-eslint.io/rules/consistent-type-exports) | type-aware | 47 / 47 |
| [`dot-notation`](https://typescript-eslint.io/rules/dot-notation) | type-aware | 61 / 61 |
| [`naming-convention`](https://typescript-eslint.io/rules/naming-convention) | type-aware | 88 / 88 |
| [`no-meaningless-void-operator`](https://typescript-eslint.io/rules/no-meaningless-void-operator) | type-aware | 5 / 5 |
| [`prefer-readonly`](https://typescript-eslint.io/rules/prefer-readonly) | type-aware | 162 / 162 |
| [`prefer-readonly-parameter-types`](https://typescript-eslint.io/rules/prefer-readonly-parameter-types) | type-aware | 130 / 130 |

### nursery — 0 rules

New or iterating rules. May change shape or move to another group.
Not included in the recommended preset. Empty today.

## Reproducing the compatibility scores

Every rule has a vendored fixture and a Go harness. From the jetlint
repo:

```bash
# typescript-eslint ports (6193 fixtures across 61 rules)
go test -count=1 -run TypescriptEslintCompatibility -v \
  ./internal/rules/<rule-package>/

# ESLint-core ports via oxc (705 fixtures across 7 rules)
go test -count=1 -run EslintCompatibility -v \
  ./internal/rules/<rule-package>/
```

The aggregate validates all 68 rules against **6898 fixtures** in one
go. See [`docs/OXLINT-COMPAT-OVERVIEW.md`](https://github.com/jetlint/jetlint/blob/main/docs/OXLINT-COMPAT-OVERVIEW.md)
for the AST-only fixture format and how to regenerate from a fresh
oxc checkout.
