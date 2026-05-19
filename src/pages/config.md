---
layout: ../layouts/Base.astro
title: Config
description: Configuring jetlint with .jetlintrc.json.
---

# Configuration

jetlint reads its configuration from `.jetlintrc.json` at the project root.
Misspelled options exit with code `2` rather than being silently ignored, so
typos can't quietly disable a rule.

## Minimum config

The default config is empty. The five rules in the
[recommended preset](/rules/#recommended-preset) run at `error`
severity; every other rule is `off`. To opt in to another rule, list
it by name:

```json
{
  "rules": {
    "no-array-delete": "error"
  }
}
```

## Severity shorthands

A rule entry can be a string for severity or an array of `[severity, options]`:

```json
{
  "rules": {
    "no-floating-promises": "error",
    "prefer-nullish-coalescing": "warning",
    "no-unused-vars": "off",
    "only-throw-error": ["error", { "allowThrowingAny": false }]
  }
}
```

Valid severities: `"error"`, `"warning"`, `"off"`.

## Per-rule options

Per-rule options match typescript-eslint's published shape exactly. For
example, `restrict-template-expressions` accepts the same option keys:

```json
{
  "rules": {
    "restrict-template-expressions": ["error", {
      "allowNumber": true,
      "allowBoolean": false,
      "allowAny": false
    }]
  }
}
```

If you pass an option key the rule doesn't recognize, jetlint exits with
`code 2` and a structured error pointing at the offending key. The same goes
for severities other than the three above.

## Project layout

```
project/
├── tsconfig.json
├── .jetlintrc.json   ← rule config
└── src/
```

jetlint resolves files using your `tsconfig.json`'s `include` / `exclude`.
Pass `--project ./tsconfig.json` to point at a specific config file.

## Ignoring files

`ignorePatterns` is a list of gitignore-flavored doublestar globs that
suppress diagnostics for matching files. Matched files stay part of the
TypeScript program &mdash; their type information is still available to
importers &mdash; only diagnostic emission is suppressed.

```json
{
  "ignorePatterns": [
    "**/generated/**",
    "packages/*/lib/**/*.gen.ts",
    "!packages/keep/lib/api/keep.gen.ts"
  ]
}
```

- A leading `!` un-ignores.
- Patterns resolve relative to the directory of the `.jetlintrc.json`
  that contains them.
- In a multi-config cascade, negation patterns from inner configs apply
  across the cascade so a child can subtract from a parent's positive
  ignore.

Unknown top-level keys (e.g. `ignoreFiles` instead of `ignorePatterns`)
exit with code `2` and a structured error so typos can't quietly
disable a feature.

Available from `@jetlint/cli@0.1.6`.

## Limiting diagnostic output

`--max-diagnostics N` caps the number of error diagnostics the human
formatter renders, and short-circuits the lint walk once the threshold
is hit. On large projects this turns a full multi-second lint into a
sub-second &ldquo;is anything broken?&rdquo; answer.

```bash
# Bail out after the first 20 errors. Default is 20.
jetlint --max-diagnostics 20

# No cap: visit every node, render every diagnostic.
jetlint --max-diagnostics 0
```

The cap only applies to the human formatter. Machine formats (`json`,
`sarif`, `github`, `junit`, `rdjson`) always return the full diagnostic
set so downstream tools aren't silently truncated. Warning-severity
diagnostics (including the engine's own `jetlint/rule-panic`
recoveries) don't consume the cap, so a buggy rule can't stop you
seeing real findings.

Available from `@jetlint/cli@0.1.7`.

## Editor and CI configs

The same `.jetlintrc.json` is used everywhere. CI invocations typically
pair `--max-diagnostics 0` (to see every finding) with `--format json`
or `--format sarif` (so downstream tools can parse the diagnostics).

## Coming next: category-level severity

Rules are already grouped into [eight categories](/rules/#all-rules-by-category)
internally. A future release will let you set severity per category in
addition to per rule:

```json
{
  "categories": {
    "correctness": "error",
    "performance": "warning",
    "style": "off"
  },
  "rules": {
    "return-await": "error"
  }
}
```

Resolution order will be: built-in defaults → category overrides →
rule overrides. Explicit rule severity always wins.

**This syntax is not yet wired.** `.jetlintrc.json` currently accepts
only the `rules` section above; a `categories` key today exits with
`code 2`. The shape is published here so the design can be
critiqued before it ships.
