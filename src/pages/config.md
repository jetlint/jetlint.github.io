---
layout: ../layouts/Base.astro
title: Config
description: Configuring jetlint with .jetlintrc.json.
---

# Configuration

jetlint reads its configuration from `.jetlintrc.json` at the project root.
Unknown keys are an error, not a warning &mdash; misspelled options exit with
code `2` instead of silently doing nothing.

## Minimum config

The default config is empty &mdash; the 5 MVP rules run at `error` severity, the
other 56 are `off`. To opt in to a rule, list it by name:

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
    "prefer-nullish-coalescing": "warn",
    "no-unused-vars": "off",
    "only-throw-error": ["error", { "allowThrowingAny": false }]
  }
}
```

Valid severities: `"error"`, `"warn"`, `"off"`.

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

## Editor and CI configs

The same `.jetlintrc.json` is used everywhere. For CI-specific overrides
(e.g. promoting `warn` to `error`), launch jetlint with `--strict` &mdash; it
treats every `warn` as `error` for that run.
