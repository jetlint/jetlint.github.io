---
layout: ../layouts/Base.astro
title: Install
description: How to install and run jetlint against a TypeScript 7 project.
---

# Install

jetlint is in active development and currently ships from source. A pre-built
binary distribution will land closer to the 1.0 release.

## Requirements

- Go **1.26 or newer**
- A TypeScript project with a `tsconfig.json` (TypeScript 7 / typescript-go targeted, but TS 5/6 sources are accepted)

## From source

```bash
go install github.com/jetlint/jetlint/cmd/jetlint@latest
```

This drops a `jetlint` binary into `$(go env GOPATH)/bin`. Make sure that
directory is on your `PATH`.

## Run on a project

```bash
jetlint --project ./tsconfig.json
```

By default, jetlint applies the **5 MVP rules** at `error` severity. The other
**56 rules** ship `off` — see [Config](/config/) to opt in.

## Run as a daemon

jetlint runs as a long-lived sidecar to keep the TypeScript checker warm.
Subsequent lints reuse the program and complete in milliseconds.

```bash
# start the daemon (logs to stderr; reads JSON-RPC on stdin)
jetlint daemon --project ./tsconfig.json
```

The daemon speaks JSON-RPC over stdio; editor extensions and CI runners can
attach without paying the program-load cost on every request.

## Editor integration

Editor packages are not yet published. The daemon's JSON-RPC schema is stable
enough to script against for early integration work — see the issue tracker
for design notes and the in-progress LSP bridge.

## CI

Run jetlint as a single command in your pipeline. Exit codes:

| Code | Meaning                              |
|-----:|--------------------------------------|
| `0`  | No diagnostics                       |
| `1`  | Lint diagnostics reported            |
| `2`  | Configuration or invocation error    |

```bash
jetlint --project ./tsconfig.json --format=github
```

`--format=github` emits GitHub Actions workflow commands so diagnostics surface
inline on pull requests.
