---
layout: ../layouts/Base.astro
title: Rules
description: "jetlints rules: type-aware ports from typescript-eslint plus syntactic rules from ESLint, Biome, and oxlint, organized by category."
---

# Rules

jetlint ships **373 rules** across seven categories: correctness,
suspicious, security, performance, complexity, a11y, and style. 367 are
active today; a few more are scaffolded and not yet emitting. Rules are
reimplemented from typescript-eslint, ESLint, Biome, and oxlint (oxc), and
validated against the vendored upstream test fixtures under `testdata/`.

**65 rules are type-aware** (marked †): they query the TypeScript 7
native checker for the checks a purely syntactic linter can't do. The
**5 recommended rules** (marked ★) default to `error`; every other rule
defaults to `off`. Opt in by name via [`.jetlintrc.json`](/config/).

> Legend: ★ on by default · † requires the type checker. Rule IDs follow
> their upstream names; look them up on
> [typescript-eslint.io](https://typescript-eslint.io/rules/) or
> [biomejs.dev](https://biomejs.dev/linter/rules/).

## By category

| Category | Rules | Type-aware |
|---|--:|--:|
| correctness | 105 | 24 |
| suspicious | 96 | 13 |
| security | 6 | 1 |
| performance | 16 | 4 |
| complexity | 51 | 17 |
| a11y | 36 | 0 |
| style | 57 | 6 |
| **total** | **367** | **65** |

## correctness (105 · 24 type-aware)

`array-callback-return`, `await-thenable` ★†, `consistent-return` †, `constructor-super`, `for-direction`, `no-array-delete` †, `no-base-to-string` ★†, `no-children-prop`, `no-cond-assign`, `no-const-assign`, `no-constant-condition`, `no-constant-math-min-max-clamp`, `no-constructor-return`, `no-duplicate-private-class-members`, `no-empty-character-class`, `no-empty-pattern`, `no-ex-assign`, `no-floating-promises` ★†, `no-for-in-array` †, `no-func-assign`, `no-global-dirname-filename`, `no-initializer-with-definite`, `no-inner-declarations`, `no-invalid-builtin-instantiation`, `no-invalid-regexp`, `no-loss-of-precision`, `no-misused-promises` ★†, `no-misused-spread` †, `no-mixed-enums` †, `no-nested-component-definitions`, `no-new-native-nonconstructor`, `no-next-async-client-component`, `no-nodejs-modules`, `no-nonoctal-decimal-escape`, `no-obj-calls`, `no-precision-loss`, `no-private-imports`, `no-process-global`, `no-promise-executor-return`, `no-qwik-use-visible-task`, `no-react-prop-assignments`, `no-render-return-value`, `no-restricted-elements`, `no-self-assign`, `no-setter-return`, `no-solid-destructured-props`, `no-string-case-mismatch`, `no-super-without-extends`, `no-switch-declarations`, `no-this-before-super`, `no-type-only-import-attributes`, `no-undeclared-dependencies`, `no-undef`, `no-unmodified-loop-condition`, `no-unreachable`, `no-unreachable-loop`, `no-unreachable-super`, `no-unresolved-imports`, `no-unsafe-argument` †, `no-unsafe-assignment` ★†, `no-unsafe-call` †, `no-unsafe-enum-comparison` †, `no-unsafe-finally`, `no-unsafe-member-access` †, `no-unsafe-optional-chaining`, `no-unsafe-return` †, `no-unsafe-unary-minus` †, `no-unused-function-parameters`, `no-unused-imports`, `no-unused-labels`, `no-unused-private-class-members`, `no-unused-vars`, `no-use-before-define`, `no-useless-backreference`, `no-void-elements-with-children`, `no-void-type-return`, `no-vue-data-object-declaration`, `no-vue-duplicate-keys`, `no-vue-reserved-keys`, `no-vue-reserved-props`, `no-vue-setup-props-reactivity-loss`, `only-throw-error` †, `prefer-promise-reject-errors` †, `related-getter-setter-pairs` †, `require-array-sort-compare` †, `require-atomic-updates`, `require-await` †, `strict-void-return` †, `switch-exhaustiveness-check` †, `use-exhaustive-dependencies`, `use-hook-at-top-level`, `use-image-size`, `use-import-extensions`, `use-isnan`, `use-json-import-attributes`, `use-jsx-key-in-iterable`, `use-parse-int-radix`, `use-qwik-classlist`, `use-qwik-method-usage`, `use-qwik-valid-lexical-scope`, `use-single-js-doc-asterisk`, `use-unique-element-ids`, `use-unknown-in-catch-callback-variable` †, `use-yield`, `valid-typeof`

## suspicious (96 · 13 type-aware)

`adjacent-overload-signatures`, `default-case-last`, `getter-return`, `guard-for-in`, `no-alert`, `no-approximative-numeric-constant`, `no-array-index-key`, `no-assign-in-expressions`, `no-async-promise-executor`, `no-bitwise-operators`, `no-catch-assign`, `no-class-assign`, `no-comment-text`, `no-compare-neg-zero`, `no-confusing-labels`, `no-confusing-void-expression` †, `no-confusing-void-type`, `no-console`, `no-const-enum`, `no-constant-binary-expression`, `no-control-regex`, `no-debugger`, `no-deprecated` †, `no-deprecated-imports` †, `no-document-cookie`, `no-document-import-in-page`, `no-double-equals`, `no-dupe-args`, `no-dupe-class-members`, `no-dupe-else-if`, `no-dupe-keys`, `no-duplicate-case`, `no-duplicate-jsx-props`, `no-duplicate-test-hooks`, `no-empty`, `no-empty-interface`, `no-empty-source`, `no-evolving-types`, `no-explicit-any`, `no-exports-in-test`, `no-extra-non-null-assertion`, `no-fallthrough`, `no-focused-tests`, `no-function-assign`, `no-global-assign`, `no-global-is-finite`, `no-global-is-nan`, `no-implicit-any-let`, `no-import-assign`, `no-import-cycles` †, `no-instanceof-array`, `no-irregular-whitespace`, `no-label-var`, `no-misleading-character-class`, `no-misplaced-assertion`, `no-misrefactored-shorthand-assign`, `no-misused-new`, `no-non-null-asserted-optional-chain`, `no-octal-escape`, `no-prototype-builtins`, `no-react-forward-ref`, `no-react-specific-props`, `no-redeclare` †, `no-redundant-use-strict`, `no-self-compare`, `no-shadow-restricted-names`, `no-skipped-tests`, `no-sparse-arrays`, `no-suspicious-semicolon-in-jsx`, `no-template-curly-in-string`, `no-then-property`, `no-ts-ignore`, `no-unassigned-variables` †, `no-unexpected-multiline`, `no-unsafe-declaration-merging`, `no-unsafe-negation`, `no-unsafe-type-assertion` †, `no-unused-expressions`, `no-useless-escape-in-string`, `no-useless-regex-backrefs`, `no-var`, `no-with`, `prefer-namespace-keyword`, `promise-function-async` †, `restrict-plus-operands` †, `restrict-template-expressions` †, `return-await` †, `strict-boolean-expressions` †, `unbound-method` †, `use-await`, `use-error-message`, `use-google-font-display`, `use-iterable-callback-return`, `use-number-to-fixed-digits-argument`, `use-static-response-methods`, `use-strict-mode`

## security (6 · 1 type-aware)

`no-blank-target`, `no-dangerously-set-inner-html`, `no-dangerously-set-inner-html-with-children`, `no-global-eval`, `no-implied-eval` †, `no-secrets`

## performance (16 · 4 type-aware)

`no-accumulating-spread`, `no-await-in-loop`, `no-barrel-file`, `no-delete`, `no-dynamic-namespace-import-access`, `no-img-element`, `no-namespace-import`, `no-re-export-all`, `no-unwanted-polyfillio`, `prefer-find` †, `prefer-includes` †, `prefer-regexp-exec` †, `prefer-string-starts-ends-with` †, `use-google-font-preconnect`, `use-solid-for-component`, `use-top-level-regex`

## complexity (51 · 17 type-aware)

`no-adjacent-spaces-in-regex`, `no-arguments`, `no-comma-operator`, `no-duplicate-type-constituents` †, `no-empty-type-parameters`, `no-excessive-lines-per-function`, `no-excessive-nested-test-suites`, `no-extra-boolean-cast`, `no-flat-map-identity`, `no-for-each`, `no-redundant-type-constituents` †, `no-static-only-class`, `no-this-in-static`, `no-unnecessary-boolean-literal-compare` †, `no-unnecessary-condition` †, `no-unnecessary-qualifier` †, `no-unnecessary-template-expression` †, `no-unnecessary-type-arguments` †, `no-unnecessary-type-assertion` †, `no-unnecessary-type-conversion` †, `no-unnecessary-type-parameters` †, `no-useless-catch`, `no-useless-catch-binding`, `no-useless-continue`, `no-useless-default-assignment` †, `no-useless-empty-export`, `no-useless-label`, `no-useless-rename`, `no-useless-string-concat`, `no-useless-string-raw`, `no-useless-switch-case`, `no-useless-ternary`, `no-useless-type-constraint`, `no-useless-undefined-initialization`, `no-void`, `non-nullable-type-assertion-style` †, `prefer-destructuring` †, `prefer-nullish-coalescing` †, `prefer-optional-chain` †, `prefer-reduce-type-parameter` †, `prefer-return-this-type` †, `use-arrow-function`, `use-date-now`, `use-flat-map`, `use-index-of`, `use-literal-keys`, `use-max-params`, `use-numeric-literals`, `use-simple-number-keys`, `use-simplified-logic-expression`, `use-while`

## a11y (36 · 0 type-aware)

`no-access-key`, `no-aria-hidden-on-focusable`, `no-aria-unsupported-elements`, `no-autofocus`, `no-distracting-elements`, `no-header-scope`, `no-interactive-element-to-noninteractive-role`, `no-label-without-control`, `no-noninteractive-element-interactions`, `no-noninteractive-element-to-interactive-role`, `no-noninteractive-tabindex`, `no-positive-tabindex`, `no-redundant-alt`, `no-redundant-roles`, `no-static-element-interactions`, `no-svg-without-title`, `use-alt-text`, `use-anchor-content`, `use-aria-activedescendant-with-tabindex`, `use-aria-props-for-role`, `use-aria-props-supported-by-role`, `use-button-type`, `use-focusable-interactive`, `use-heading-content`, `use-html-lang`, `use-iframe-title`, `use-key-with-click-events`, `use-key-with-mouse-events`, `use-media-caption`, `use-semantic-elements`, `use-valid-anchor`, `use-valid-aria-props`, `use-valid-aria-role`, `use-valid-aria-values`, `use-valid-autocomplete`, `use-valid-lang`

## style (57 · 6 type-aware)

`consistent-type-exports` †, `dot-notation` †, `naming-convention` †, `no-common-js`, `no-default-export`, `no-done-callback`, `no-duplicate-imports`, `no-enum`, `no-exported-imports`, `no-implicit-boolean`, `no-meaningless-void-operator` †, `no-namespace`, `no-negation-else`, `no-nested-ternary`, `no-non-null-assertion`, `no-parameter-assign`, `no-parameter-properties`, `no-process-env`, `no-restricted-globals`, `no-shouty-constants`, `no-substr`, `no-unused-template-literal`, `no-useless-else`, `no-yoda-expression`, `prefer-readonly` †, `prefer-readonly-parameter-types` †, `use-array-literals`, `use-as-const-assertion`, `use-block-statements`, `use-collapsed-else-if`, `use-collapsed-if`, `use-consistent-array-type`, `use-consistent-arrow-return`, `use-consistent-builtin-instantiation`, `use-consistent-type-definitions`, `use-default-parameter-last`, `use-enum-initializers`, `use-explicit-length-check`, `use-exponentiation-operator`, `use-exports-last`, `use-for-of`, `use-fragment-syntax`, `use-grouped-accessor-pairs`, `use-node-assert-strict`, `use-nodejs-import-protocol`, `use-number-namespace`, `use-numeric-separators`, `use-object-spread`, `use-react-function-components`, `use-self-closing-elements`, `use-shorthand-assign`, `use-shorthand-function-type`, `use-single-var-declarator`, `use-symbol-description`, `use-throw-new-error`, `use-throw-only-error`, `use-trim-start-end`

## Reproducing the compatibility scores

Every rule has a vendored fixture and a Go harness that loads it. From the
jetlint repo, reproduce a single rule:

```bash
go test -count=1 -run Compatibility -v ./internal/rules/<rule-package>/
```

Type-aware ports run under the `TypescriptEslintCompatibility` harness against
typescript-eslint's published fixtures; ESLint-, Biome-, and oxc-derived rules
run under the `EslintCompatibility` / `BiomeCompatibility` harnesses against the
fixtures vendored in `testdata/`. All rule suites currently pass.
