---
layout: ../layouts/Base.astro
title: Rules
description: All 66 jetlint rules — 61 typescript-eslint ports plus 5 ESLint-core ports.
---

# Rules

jetlint ships **66 rules** in two families:

- **61 typescript-eslint ports** — type-aware rules verified against
  typescript-eslint's published test fixtures.
- **5 ESLint-core ports** — non-type-aware correctness rules
  (`no-dupe-keys`, `no-duplicate-case`, `no-self-compare`, `use-isnan`,
  `valid-typeof`) that catch bugs the TypeScript checker cannot.

> **typescript-eslint compatibility: 6193 / 6193 fixtures pass (100%).**

The **5 MVP rules** marked below default to `error`. Every other rule
defaults to `off`; opt in via [`.jetlintrc.json`](/config/).

## MVP rules (default: error)

| Rule | Fixtures |
|---|---:|
| [`await-thenable`](https://typescript-eslint.io/rules/await-thenable) | 121 / 121 |
| [`no-floating-promises`](https://typescript-eslint.io/rules/no-floating-promises) | 175 / 175 |
| [`no-misused-promises`](https://typescript-eslint.io/rules/no-misused-promises) | 215 / 215 |
| [`no-unsafe-assignment`](https://typescript-eslint.io/rules/no-unsafe-assignment) | 91 / 91 |
| [`strict-boolean-expressions`](https://typescript-eslint.io/rules/strict-boolean-expressions) | 214 / 214 |

## Opt-in rules (default: off)

| Rule | Fixtures |
|---|---:|
| [`consistent-return`](https://typescript-eslint.io/rules/consistent-return) | 30 / 30 |
| [`consistent-type-exports`](https://typescript-eslint.io/rules/consistent-type-exports) | 47 / 47 |
| [`dot-notation`](https://typescript-eslint.io/rules/dot-notation) | 61 / 61 |
| [`naming-convention`](https://typescript-eslint.io/rules/naming-convention) | 88 / 88 |
| [`no-array-delete`](https://typescript-eslint.io/rules/no-array-delete) | 29 / 29 |
| [`no-base-to-string`](https://typescript-eslint.io/rules/no-base-to-string) | 315 / 315 |
| [`no-confusing-void-expression`](https://typescript-eslint.io/rules/no-confusing-void-expression) | 108 / 108 |
| [`no-deprecated`](https://typescript-eslint.io/rules/no-deprecated) | 262 / 262 |
| [`no-duplicate-type-constituents`](https://typescript-eslint.io/rules/no-duplicate-type-constituents) | 82 / 82 |
| [`no-for-in-array`](https://typescript-eslint.io/rules/no-for-in-array) | 22 / 22 |
| [`no-implied-eval`](https://typescript-eslint.io/rules/no-implied-eval) | 70 / 70 |
| [`no-meaningless-void-operator`](https://typescript-eslint.io/rules/no-meaningless-void-operator) | 5 / 5 |
| [`no-misused-spread`](https://typescript-eslint.io/rules/no-misused-spread) | 128 / 128 |
| [`no-mixed-enums`](https://typescript-eslint.io/rules/no-mixed-enums) | 51 / 51 |
| [`no-redundant-type-constituents`](https://typescript-eslint.io/rules/no-redundant-type-constituents) | 104 / 104 |
| [`no-unnecessary-boolean-literal-compare`](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare) | 45 / 45 |
| [`no-unnecessary-condition`](https://typescript-eslint.io/rules/no-unnecessary-condition) | 296 / 296 |
| [`no-unnecessary-qualifier`](https://typescript-eslint.io/rules/no-unnecessary-qualifier) | 17 / 17 |
| [`no-unnecessary-template-expression`](https://typescript-eslint.io/rules/no-unnecessary-template-expression) | 71 / 71 |
| [`no-unnecessary-type-arguments`](https://typescript-eslint.io/rules/no-unnecessary-type-arguments) | 71 / 71 |
| [`no-unnecessary-type-assertion`](https://typescript-eslint.io/rules/no-unnecessary-type-assertion) | 223 / 223 |
| [`no-unnecessary-type-conversion`](https://typescript-eslint.io/rules/no-unnecessary-type-conversion) | 66 / 66 |
| [`no-unnecessary-type-parameters`](https://typescript-eslint.io/rules/no-unnecessary-type-parameters) | 160 / 160 |
| [`no-unsafe-argument`](https://typescript-eslint.io/rules/no-unsafe-argument) | 42 / 42 |
| [`no-unsafe-call`](https://typescript-eslint.io/rules/no-unsafe-call) | 38 / 38 |
| [`no-unsafe-enum-comparison`](https://typescript-eslint.io/rules/no-unsafe-enum-comparison) | 85 / 85 |
| [`no-unsafe-member-access`](https://typescript-eslint.io/rules/no-unsafe-member-access) | 35 / 35 |
| [`no-unsafe-return`](https://typescript-eslint.io/rules/no-unsafe-return) | 62 / 62 |
| [`no-unsafe-type-assertion`](https://typescript-eslint.io/rules/no-unsafe-type-assertion) | 15 / 15 |
| [`no-unsafe-unary-minus`](https://typescript-eslint.io/rules/no-unsafe-unary-minus) | 23 / 23 |
| [`no-useless-default-assignment`](https://typescript-eslint.io/rules/no-useless-default-assignment) | 83 / 83 |
| [`non-nullable-type-assertion-style`](https://typescript-eslint.io/rules/non-nullable-type-assertion-style) | 20 / 20 |
| [`only-throw-error`](https://typescript-eslint.io/rules/only-throw-error) | 89 / 89 |
| [`prefer-destructuring`](https://typescript-eslint.io/rules/prefer-destructuring) | 92 / 92 |
| [`prefer-find`](https://typescript-eslint.io/rules/prefer-find) | 45 / 45 |
| [`prefer-includes`](https://typescript-eslint.io/rules/prefer-includes) | 42 / 42 |
| [`prefer-nullish-coalescing`](https://typescript-eslint.io/rules/prefer-nullish-coalescing) | 617 / 617 |
| [`prefer-optional-chain`](https://typescript-eslint.io/rules/prefer-optional-chain) | 45 / 45 |
| [`prefer-promise-reject-errors`](https://typescript-eslint.io/rules/prefer-promise-reject-errors) | 161 / 161 |
| [`prefer-readonly`](https://typescript-eslint.io/rules/prefer-readonly) | 162 / 162 |
| [`prefer-readonly-parameter-types`](https://typescript-eslint.io/rules/prefer-readonly-parameter-types) | 130 / 130 |
| [`prefer-reduce-type-parameter`](https://typescript-eslint.io/rules/prefer-reduce-type-parameter) | 31 / 31 |
| [`prefer-regexp-exec`](https://typescript-eslint.io/rules/prefer-regexp-exec) | 37 / 37 |
| [`prefer-return-this-type`](https://typescript-eslint.io/rules/prefer-return-this-type) | 21 / 21 |
| [`prefer-string-starts-ends-with`](https://typescript-eslint.io/rules/prefer-string-starts-ends-with) | 123 / 123 |
| [`promise-function-async`](https://typescript-eslint.io/rules/promise-function-async) | 53 / 53 |
| [`related-getter-setter-pairs`](https://typescript-eslint.io/rules/related-getter-setter-pairs) | 23 / 23 |
| [`require-array-sort-compare`](https://typescript-eslint.io/rules/require-array-sort-compare) | 33 / 33 |
| [`require-await`](https://typescript-eslint.io/rules/require-await) | 54 / 54 |
| [`restrict-plus-operands`](https://typescript-eslint.io/rules/restrict-plus-operands) | 119 / 119 |
| [`restrict-template-expressions`](https://typescript-eslint.io/rules/restrict-template-expressions) | 79 / 79 |
| [`return-await`](https://typescript-eslint.io/rules/return-await) | 95 / 95 |
| [`strict-void-return`](https://typescript-eslint.io/rules/strict-void-return) | 210 / 210 |
| [`switch-exhaustiveness-check`](https://typescript-eslint.io/rules/switch-exhaustiveness-check) | 104 / 104 |
| [`unbound-method`](https://typescript-eslint.io/rules/unbound-method) | 202 / 202 |
| [`use-unknown-in-catch-callback-variable`](https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable) | 56 / 56 |

## ESLint-core rules (default: off)

These rules catch bugs that don't need type information — typos in
`typeof` checks, comparisons against `NaN`, or accidentally comparing a
variable to itself. Ported from ESLint core, not typescript-eslint, so
the table links to the ESLint docs and the fixture column doesn't
apply.

| Rule | Catches |
|---|---|
| [`no-dupe-keys`](https://eslint.org/docs/latest/rules/no-dupe-keys) | `{a: 1, a: 2}` — earlier assignments silently dropped. Getter/setter pairs for the same name are allowed. |
| [`no-duplicate-case`](https://eslint.org/docs/latest/rules/no-duplicate-case) | `case 1: ... case 1:` in a switch. The duplicate is unreachable. |
| [`no-self-compare`](https://eslint.org/docs/latest/rules/no-self-compare) | `a === a`, `obj.foo > obj.foo`, and similar. Usually a typo. |
| [`use-isnan`](https://eslint.org/docs/latest/rules/use-isnan) | `x === NaN`, `Number.NaN !== y`. `NaN` is never equal to anything; use `Number.isNaN()`. |
| [`valid-typeof`](https://eslint.org/docs/latest/rules/valid-typeof) | `typeof x === "stirng"` — typo'd typeof results. The eight valid values are `undefined`, `object`, `boolean`, `number`, `string`, `function`, `symbol`, `bigint`. |

## Reproducing the compatibility scores

Every typescript-eslint port has a vendored fixture and a Go harness
that loads it. From the jetlint repo:

```bash
go test -count=1 -run TypescriptEslintCompatibility -v \
  ./internal/rules/<rule-package>/
```

The aggregate run validates **all 61 typescript-eslint ports** against
**6193 fixtures** in one go. The five ESLint-core ports
(`no-dupe-keys`, `no-duplicate-case`, `no-self-compare`, `use-isnan`,
`valid-typeof`) ship with their own hand-rolled unit tests because
ESLint core does not publish a machine-readable fixture format.
