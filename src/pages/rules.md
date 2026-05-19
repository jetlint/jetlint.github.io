---
layout: ../layouts/Base.astro
title: Rules
description: All 373 jetlint rules, organized into 8 categories. 5 in the recommended preset; the rest opt-in.
---

# Rules

jetlint ships **373 rules** organized into **8 categories**. Five
rules form the **recommended preset** and fire at `error` severity by
default; every other rule is `off` until opted in via
[`.jetlintrc.json`](/config/).

**Compatibility.** 6193 / 6193 typescript-eslint fixtures pass, plus
5459 / 5459 AST-only fixtures across the 303 biome and
oxlint ports, plus 71 / 71 hand-written tests for the 9
ESLint-core rules without upstream fixture data — **100% across the
board** (11723 cases total). Every rule's score is reproducible from
the [jetlint repo](https://github.com/jetlint/jetlint).

**Origin.** Type-aware rules were ported from
[typescript-eslint](https://typescript-eslint.io/); AST-only rules
from [biome](https://biomejs.dev/) and
[oxlint](https://oxc.rs/docs/guide/usage/linter) (which themselves
mirror [ESLint core](https://eslint.org/) for the JS-only rules). The
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

The eight categories follow the rubric in
[`docs/RULE-CATEGORIES.md`](https://github.com/jetlint/jetlint/blob/main/docs/RULE-CATEGORIES.md):
the first matching framing wins, with `correctness` beating
`performance` beating `complexity` for cross-cutting rules. A ★
marks rules in the recommended preset.

### correctness — 105 rules

Code that is wrong: runtime bugs, undefined behavior, type holes. No legitimate reason to write.

| Rule | Mode | Fixtures |
|---|:-:|---:|
| [`array-callback-return`](https://eslint.org/docs/latest/rules/array-callback-return) | AST-only | 241 / 241 |
| ★ [`await-thenable`](https://typescript-eslint.io/rules/await-thenable) | type-aware | 121 / 121 |
| [`consistent-return`](https://typescript-eslint.io/rules/consistent-return) | type-aware | 30 / 30 |
| [`constructor-super`](https://eslint.org/docs/latest/rules/constructor-super) | AST-only | 87 / 87 |
| [`for-direction`](https://eslint.org/docs/latest/rules/for-direction) | AST-only | 65 / 65 |
| [`no-array-delete`](https://typescript-eslint.io/rules/no-array-delete) | type-aware | 29 / 29 |
| ★ [`no-base-to-string`](https://typescript-eslint.io/rules/no-base-to-string) | type-aware | 315 / 315 |
| [`no-children-prop`](https://biomejs.dev/linter/rules/noChildrenProp) | AST-only | 2 / 2 |
| [`no-cond-assign`](https://eslint.org/docs/latest/rules/no-cond-assign) | AST-only | 57 / 57 |
| [`no-const-assign`](https://eslint.org/docs/latest/rules/no-const-assign) | AST-only | 44 / 44 |
| [`no-constant-condition`](https://eslint.org/docs/latest/rules/no-constant-condition) | AST-only | 306 / 306 |
| [`no-constant-math-min-max-clamp`](https://biomejs.dev/linter/rules/noConstantMathMinMaxClamp) | AST-only | 3 / 3 |
| [`no-constructor-return`](https://eslint.org/docs/latest/rules/no-constructor-return) | AST-only | 20 / 20 |
| [`no-duplicate-private-class-members`](https://biomejs.dev/linter/rules/noDuplicatePrivateClassMembers) | AST-only | 2 / 2 |
| [`no-empty-character-class`](https://eslint.org/docs/latest/rules/no-empty-character-class) | AST-only | 7 hand-written |
| [`no-empty-pattern`](https://eslint.org/docs/latest/rules/no-empty-pattern) | AST-only | 31 / 31 |
| [`no-ex-assign`](https://eslint.org/docs/latest/rules/no-ex-assign) | AST-only | 8 / 8 |
| ★ [`no-floating-promises`](https://typescript-eslint.io/rules/no-floating-promises) | type-aware | 175 / 175 |
| [`no-for-in-array`](https://typescript-eslint.io/rules/no-for-in-array) | type-aware | 22 / 22 |
| [`no-func-assign`](https://eslint.org/docs/latest/rules/no-func-assign) | AST-only | 16 / 16 |
| [`no-global-dirname-filename`](https://biomejs.dev/linter/rules/noGlobalDirnameFilename) | AST-only | 4 / 4 |
| [`no-initializer-with-definite`](https://biomejs.dev/linter/rules/noInitializerWithDefinite) | AST-only | 2 / 2 |
| [`no-inner-declarations`](https://eslint.org/docs/latest/rules/no-inner-declarations) | AST-only | 66 / 66 |
| [`no-invalid-builtin-instantiation`](https://biomejs.dev/linter/rules/noInvalidBuiltinInstantiation) | AST-only | 2 / 2 |
| [`no-invalid-regexp`](https://eslint.org/docs/latest/rules/no-invalid-regexp) | AST-only | 7 hand-written |
| [`no-loss-of-precision`](https://eslint.org/docs/latest/rules/no-loss-of-precision) | AST-only | 145 / 145 |
| ★ [`no-misused-promises`](https://typescript-eslint.io/rules/no-misused-promises) | type-aware | 215 / 215 |
| [`no-misused-spread`](https://typescript-eslint.io/rules/no-misused-spread) | type-aware | 128 / 128 |
| [`no-mixed-enums`](https://typescript-eslint.io/rules/no-mixed-enums) | type-aware | 51 / 51 |
| [`no-nested-component-definitions`](https://biomejs.dev/linter/rules/noNestedComponentDefinitions) | AST-only | 3 / 3 |
| [`no-new-native-nonconstructor`](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor) | AST-only | 14 / 14 |
| [`no-next-async-client-component`](https://biomejs.dev/linter/rules/noNextAsyncClientComponent) | AST-only | 3 / 3 |
| [`no-nodejs-modules`](https://biomejs.dev/linter/rules/noNodejsModules) | AST-only | 3 / 3 |
| [`no-nonoctal-decimal-escape`](https://biomejs.dev/linter/rules/noNonoctalDecimalEscape) | AST-only | 2 / 2 |
| [`no-obj-calls`](https://eslint.org/docs/latest/rules/no-obj-calls) | AST-only | 75 / 75 |
| [`no-precision-loss`](https://biomejs.dev/linter/rules/noPrecisionLoss) | AST-only | 2 / 2 |
| [`no-private-imports`](https://biomejs.dev/linter/rules/noPrivateImports) | AST-only | 17 / 17 |
| [`no-process-global`](https://biomejs.dev/linter/rules/noProcessGlobal) | AST-only | 4 / 4 |
| [`no-promise-executor-return`](https://eslint.org/docs/latest/rules/no-promise-executor-return) | AST-only | 122 / 122 |
| [`no-qwik-use-visible-task`](https://biomejs.dev/linter/rules/noQwikUseVisibleTask) | AST-only | 2 / 2 |
| [`no-react-prop-assignments`](https://biomejs.dev/linter/rules/noReactPropAssignments) | AST-only | 2 / 2 |
| [`no-render-return-value`](https://biomejs.dev/linter/rules/noRenderReturnValue) | AST-only | 5 / 5 |
| [`no-restricted-elements`](https://biomejs.dev/linter/rules/noRestrictedElements) | AST-only | 0 / 0 |
| [`no-self-assign`](https://eslint.org/docs/latest/rules/no-self-assign) | AST-only | 92 / 92 |
| [`no-setter-return`](https://eslint.org/docs/latest/rules/no-setter-return) | AST-only | 142 / 142 |
| [`no-solid-destructured-props`](https://biomejs.dev/linter/rules/noSolidDestructuredProps) | AST-only | 2 / 2 |
| [`no-string-case-mismatch`](https://biomejs.dev/linter/rules/noStringCaseMismatch) | AST-only | 2 / 2 |
| [`no-super-without-extends`](https://biomejs.dev/linter/rules/noSuperWithoutExtends) | AST-only | 2 / 2 |
| [`no-switch-declarations`](https://biomejs.dev/linter/rules/noSwitchDeclarations) | AST-only | 13 / 13 |
| [`no-this-before-super`](https://eslint.org/docs/latest/rules/no-this-before-super) | AST-only | 65 / 65 |
| [`no-type-only-import-attributes`](https://biomejs.dev/linter/rules/noTypeOnlyImportAttributes) | AST-only | 4 / 4 |
| [`no-undeclared-dependencies`](https://biomejs.dev/linter/rules/noUndeclaredDependencies) | AST-only | 4 / 4 |
| [`no-undef`](https://eslint.org/docs/latest/rules/no-undef) | AST-only | 97 / 97 |
| [`no-unmodified-loop-condition`](https://eslint.org/docs/latest/rules/no-unmodified-loop-condition) | AST-only | 39 / 39 |
| [`no-unreachable`](https://eslint.org/docs/latest/rules/no-unreachable) | AST-only | 65 / 65 |
| [`no-unreachable-loop`](https://eslint.org/docs/latest/rules/no-unreachable-loop) | AST-only | 10 hand-written |
| [`no-unreachable-super`](https://biomejs.dev/linter/rules/noUnreachableSuper) | AST-only | 4 / 4 |
| [`no-unresolved-imports`](https://biomejs.dev/linter/rules/noUnresolvedImports) | AST-only | 2 / 2 |
| [`no-unsafe-argument`](https://typescript-eslint.io/rules/no-unsafe-argument) | type-aware | 42 / 42 |
| ★ [`no-unsafe-assignment`](https://typescript-eslint.io/rules/no-unsafe-assignment) | type-aware | 91 / 91 |
| [`no-unsafe-call`](https://typescript-eslint.io/rules/no-unsafe-call) | type-aware | 38 / 38 |
| [`no-unsafe-enum-comparison`](https://typescript-eslint.io/rules/no-unsafe-enum-comparison) | type-aware | 85 / 85 |
| [`no-unsafe-finally`](https://eslint.org/docs/latest/rules/no-unsafe-finally) | AST-only | 28 / 28 |
| [`no-unsafe-member-access`](https://typescript-eslint.io/rules/no-unsafe-member-access) | type-aware | 35 / 35 |
| [`no-unsafe-optional-chaining`](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining) | AST-only | 82 / 82 |
| [`no-unsafe-return`](https://typescript-eslint.io/rules/no-unsafe-return) | type-aware | 62 / 62 |
| [`no-unsafe-unary-minus`](https://typescript-eslint.io/rules/no-unsafe-unary-minus) | type-aware | 23 / 23 |
| [`no-unused-function-parameters`](https://biomejs.dev/linter/rules/noUnusedFunctionParameters) | AST-only | 6 / 6 |
| [`no-unused-imports`](https://biomejs.dev/linter/rules/noUnusedImports) | AST-only | 30 / 30 |
| [`no-unused-labels`](https://eslint.org/docs/latest/rules/no-unused-labels) | AST-only | 31 / 31 |
| [`no-unused-private-class-members`](https://eslint.org/docs/latest/rules/no-unused-private-class-members) | AST-only | 87 / 87 |
| [`no-unused-vars`](https://eslint.org/docs/latest/rules/no-unused-vars) | AST-only | 12 hand-written |
| [`no-use-before-define`](https://eslint.org/docs/latest/rules/no-use-before-define) | AST-only | 340 / 340 |
| [`no-useless-backreference`](https://eslint.org/docs/latest/rules/no-useless-backreference) | AST-only | 9 hand-written |
| [`no-void-elements-with-children`](https://biomejs.dev/linter/rules/noVoidElementsWithChildren) | AST-only | 2 / 2 |
| [`no-void-type-return`](https://biomejs.dev/linter/rules/noVoidTypeReturn) | AST-only | 2 / 2 |
| [`no-vue-data-object-declaration`](https://biomejs.dev/linter/rules/noVueDataObjectDeclaration) | AST-only | 13 / 13 |
| [`no-vue-duplicate-keys`](https://biomejs.dev/linter/rules/noVueDuplicateKeys) | AST-only | 21 / 21 |
| [`no-vue-reserved-keys`](https://biomejs.dev/linter/rules/noVueReservedKeys) | AST-only | 21 / 21 |
| [`no-vue-reserved-props`](https://biomejs.dev/linter/rules/noVueReservedProps) | AST-only | 20 / 20 |
| [`no-vue-setup-props-reactivity-loss`](https://biomejs.dev/linter/rules/noVueSetupPropsReactivityLoss) | AST-only | 4 / 4 |
| [`only-throw-error`](https://typescript-eslint.io/rules/only-throw-error) | type-aware | 89 / 89 |
| [`prefer-promise-reject-errors`](https://typescript-eslint.io/rules/prefer-promise-reject-errors) | type-aware | 161 / 161 |
| [`related-getter-setter-pairs`](https://typescript-eslint.io/rules/related-getter-setter-pairs) | type-aware | 23 / 23 |
| [`require-array-sort-compare`](https://typescript-eslint.io/rules/require-array-sort-compare) | type-aware | 33 / 33 |
| [`require-atomic-updates`](https://eslint.org/docs/latest/rules/require-atomic-updates) | AST-only | 7 hand-written |
| [`require-await`](https://typescript-eslint.io/rules/require-await) | type-aware | 54 / 54 |
| [`strict-void-return`](https://typescript-eslint.io/rules/strict-void-return) | type-aware | 210 / 210 |
| [`switch-exhaustiveness-check`](https://typescript-eslint.io/rules/switch-exhaustiveness-check) | type-aware | 104 / 104 |
| [`use-exhaustive-dependencies`](https://biomejs.dev/linter/rules/useExhaustiveDependencies) | AST-only | 37 / 37 |
| [`use-hook-at-top-level`](https://biomejs.dev/linter/rules/useHookAtTopLevel) | AST-only | 10 / 10 |
| [`use-image-size`](https://biomejs.dev/linter/rules/useImageSize) | AST-only | 6 / 6 |
| [`use-import-extensions`](https://biomejs.dev/linter/rules/useImportExtensions) | AST-only | 2 / 2 |
| [`use-isnan`](https://eslint.org/docs/latest/rules/use-isnan) | AST-only | 208 / 208 |
| [`use-json-import-attributes`](https://biomejs.dev/linter/rules/useJsonImportAttributes) | AST-only | 2 / 2 |
| [`use-jsx-key-in-iterable`](https://biomejs.dev/linter/rules/useJsxKeyInIterable) | AST-only | 2 / 2 |
| [`use-parse-int-radix`](https://biomejs.dev/linter/rules/useParseIntRadix) | AST-only | 2 / 2 |
| [`use-qwik-classlist`](https://biomejs.dev/linter/rules/useQwikClasslist) | AST-only | 2 / 2 |
| [`use-qwik-method-usage`](https://biomejs.dev/linter/rules/useQwikMethodUsage) | AST-only | 2 / 2 |
| [`use-qwik-valid-lexical-scope`](https://biomejs.dev/linter/rules/useQwikValidLexicalScope) | AST-only | 2 / 2 |
| [`use-single-js-doc-asterisk`](https://biomejs.dev/linter/rules/useSingleJsDocAsterisk) | AST-only | 3 / 3 |
| [`use-unique-element-ids`](https://biomejs.dev/linter/rules/useUniqueElementIds) | AST-only | 2 / 2 |
| [`use-unknown-in-catch-callback-variable`](https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable) | type-aware | 56 / 56 |
| [`use-yield`](https://eslint.org/docs/latest/rules/use-yield) | AST-only | 17 / 17 |
| [`valid-typeof`](https://eslint.org/docs/latest/rules/valid-typeof) | AST-only | 60 / 60 |

### suspicious — 97 rules

Code that smells. Usually wrong, occasionally intentional. The author should justify or fix.

| Rule | Mode | Fixtures |
|---|:-:|---:|
| [`adjacent-overload-signatures`](https://eslint.org/docs/latest/rules/adjacent-overload-signatures) | AST-only | 64 / 64 |
| [`default-case-last`](https://eslint.org/docs/latest/rules/default-case-last) | AST-only | 37 / 37 |
| [`getter-return`](https://eslint.org/docs/latest/rules/getter-return) | AST-only | 85 / 85 |
| [`guard-for-in`](https://eslint.org/docs/latest/rules/guard-for-in) | AST-only | 12 / 12 |
| [`no-alert`](https://biomejs.dev/linter/rules/noAlert) | AST-only | 2 / 2 |
| [`no-approximative-numeric-constant`](https://biomejs.dev/linter/rules/noApproximativeNumericConstant) | AST-only | 2 / 2 |
| [`no-array-index-key`](https://biomejs.dev/linter/rules/noArrayIndexKey) | AST-only | 2 / 2 |
| [`no-assign-in-expressions`](https://biomejs.dev/linter/rules/noAssignInExpressions) | AST-only | 3 / 3 |
| [`no-async-promise-executor`](https://eslint.org/docs/latest/rules/no-async-promise-executor) | AST-only | 6 / 6 |
| [`no-bitwise-operators`](https://biomejs.dev/linter/rules/noBitwiseOperators) | AST-only | 2 / 2 |
| [`no-catch-assign`](https://biomejs.dev/linter/rules/noCatchAssign) | AST-only | 1 / 1 |
| [`no-class-assign`](https://eslint.org/docs/latest/rules/no-class-assign) | AST-only | 25 / 25 |
| [`no-comment-text`](https://biomejs.dev/linter/rules/noCommentText) | AST-only | 2 / 2 |
| [`no-compare-neg-zero`](https://eslint.org/docs/latest/rules/no-compare-neg-zero) | AST-only | 40 / 40 |
| [`no-confusing-labels`](https://biomejs.dev/linter/rules/noConfusingLabels) | AST-only | 20 / 20 |
| [`no-confusing-void-expression`](https://typescript-eslint.io/rules/no-confusing-void-expression) | type-aware | 108 / 108 |
| [`no-confusing-void-type`](https://biomejs.dev/linter/rules/noConfusingVoidType) | AST-only | 2 / 2 |
| [`no-console`](https://biomejs.dev/linter/rules/noConsole) | AST-only | 4 / 4 |
| [`no-const-enum`](https://biomejs.dev/linter/rules/noConstEnum) | AST-only | 1 / 1 |
| [`no-constant-binary-expression`](https://eslint.org/docs/latest/rules/no-constant-binary-expression) | AST-only | 251 / 251 |
| [`no-control-regex`](https://eslint.org/docs/latest/rules/no-control-regex) | AST-only | 8 hand-written |
| [`no-debugger`](https://eslint.org/docs/latest/rules/no-debugger) | AST-only | 2 / 2 |
| [`no-deprecated`](https://typescript-eslint.io/rules/no-deprecated) | type-aware | 262 / 262 |
| [`no-deprecated-imports`](https://biomejs.dev/linter/rules/noDeprecatedImports) | AST-only | 4 / 4 |
| [`no-document-cookie`](https://biomejs.dev/linter/rules/noDocumentCookie) | AST-only | 2 / 2 |
| [`no-document-import-in-page`](https://biomejs.dev/linter/rules/noDocumentImportInPage) | AST-only | 1 / 1 |
| [`no-double-equals`](https://biomejs.dev/linter/rules/noDoubleEquals) | AST-only | 7 / 7 |
| [`no-dupe-args`](https://eslint.org/docs/latest/rules/no-dupe-args) | AST-only | 5 hand-written |
| [`no-dupe-class-members`](https://eslint.org/docs/latest/rules/no-dupe-class-members) | AST-only | 74 / 74 |
| [`no-dupe-else-if`](https://eslint.org/docs/latest/rules/no-dupe-else-if) | AST-only | 89 / 89 |
| [`no-dupe-keys`](https://eslint.org/docs/latest/rules/no-dupe-keys) | AST-only | 50 / 50 |
| [`no-duplicate-case`](https://eslint.org/docs/latest/rules/no-duplicate-case) | AST-only | 30 / 30 |
| [`no-duplicate-jsx-props`](https://biomejs.dev/linter/rules/noDuplicateJsxProps) | AST-only | 2 / 2 |
| [`no-duplicate-test-hooks`](https://biomejs.dev/linter/rules/noDuplicateTestHooks) | AST-only | 2 / 2 |
| [`no-empty`](https://eslint.org/docs/latest/rules/no-empty) | AST-only | 34 / 34 |
| [`no-empty-interface`](https://biomejs.dev/linter/rules/noEmptyInterface) | AST-only | 3 / 3 |
| [`no-empty-source`](https://biomejs.dev/linter/rules/noEmptySource) | AST-only | 11 / 11 |
| [`no-evolving-types`](https://biomejs.dev/linter/rules/noEvolvingTypes) | AST-only | 2 / 2 |
| [`no-explicit-any`](https://biomejs.dev/linter/rules/noExplicitAny) | AST-only | 6 / 6 |
| [`no-exports-in-test`](https://biomejs.dev/linter/rules/noExportsInTest) | AST-only | 5 / 5 |
| [`no-extra-non-null-assertion`](https://biomejs.dev/linter/rules/noExtraNonNullAssertion) | AST-only | 2 / 2 |
| [`no-fallthrough`](https://eslint.org/docs/latest/rules/no-fallthrough) | AST-only | 86 / 86 |
| [`no-focused-tests`](https://biomejs.dev/linter/rules/noFocusedTests) | AST-only | 2 / 2 |
| [`no-function-assign`](https://biomejs.dev/linter/rules/noFunctionAssign) | AST-only | 13 / 13 |
| [`no-global-assign`](https://biomejs.dev/linter/rules/noGlobalAssign) | AST-only | 2 / 2 |
| [`no-global-is-finite`](https://biomejs.dev/linter/rules/noGlobalIsFinite) | AST-only | 2 / 2 |
| [`no-global-is-nan`](https://biomejs.dev/linter/rules/noGlobalIsNan) | AST-only | 2 / 2 |
| [`no-head-import-in-document`](https://biomejs.dev/linter/rules/noHeadImportInDocument) | AST-only | 0 / 0 |
| [`no-implicit-any-let`](https://biomejs.dev/linter/rules/noImplicitAnyLet) | AST-only | 2 / 2 |
| [`no-import-assign`](https://eslint.org/docs/latest/rules/no-import-assign) | AST-only | 116 / 116 |
| [`no-import-cycles`](https://biomejs.dev/linter/rules/noImportCycles) | AST-only | 4 / 4 |
| [`no-instanceof-array`](https://eslint.org/docs/latest/rules/no-instanceof-array) | AST-only | 17 / 17 |
| [`no-irregular-whitespace`](https://eslint.org/docs/latest/rules/no-irregular-whitespace) | AST-only | 220 / 220 |
| [`no-label-var`](https://biomejs.dev/linter/rules/noLabelVar) | AST-only | 2 / 2 |
| [`no-misleading-character-class`](https://eslint.org/docs/latest/rules/no-misleading-character-class) | AST-only | 6 hand-written |
| [`no-misplaced-assertion`](https://biomejs.dev/linter/rules/noMisplacedAssertion) | AST-only | 9 / 9 |
| [`no-misrefactored-shorthand-assign`](https://biomejs.dev/linter/rules/noMisrefactoredShorthandAssign) | AST-only | 2 / 2 |
| [`no-misused-new`](https://eslint.org/docs/latest/rules/no-misused-new) | AST-only | 19 / 19 |
| [`no-non-null-asserted-optional-chain`](https://biomejs.dev/linter/rules/noNonNullAssertedOptionalChain) | AST-only | 2 / 2 |
| [`no-octal-escape`](https://biomejs.dev/linter/rules/noOctalEscape) | AST-only | 2 / 2 |
| [`no-prototype-builtins`](https://eslint.org/docs/latest/rules/no-prototype-builtins) | AST-only | 47 / 47 |
| [`no-react-forward-ref`](https://biomejs.dev/linter/rules/noReactForwardRef) | AST-only | 7 / 7 |
| [`no-react-specific-props`](https://biomejs.dev/linter/rules/noReactSpecificProps) | AST-only | 2 / 2 |
| [`no-redeclare`](https://biomejs.dev/linter/rules/noRedeclare) | AST-only | 51 / 51 |
| [`no-redundant-use-strict`](https://biomejs.dev/linter/rules/noRedundantUseStrict) | AST-only | 15 / 15 |
| [`no-self-compare`](https://eslint.org/docs/latest/rules/no-self-compare) | AST-only | 24 / 24 |
| [`no-shadow-restricted-names`](https://biomejs.dev/linter/rules/noShadowRestrictedNames) | AST-only | 7 / 7 |
| [`no-skipped-tests`](https://biomejs.dev/linter/rules/noSkippedTests) | AST-only | 2 / 2 |
| [`no-sparse-arrays`](https://eslint.org/docs/latest/rules/no-sparse-arrays) | AST-only | 9 / 9 |
| [`no-suspicious-semicolon-in-jsx`](https://biomejs.dev/linter/rules/noSuspiciousSemicolonInJsx) | AST-only | 2 / 2 |
| [`no-template-curly-in-string`](https://eslint.org/docs/latest/rules/no-template-curly-in-string) | AST-only | 23 / 23 |
| [`no-then-property`](https://biomejs.dev/linter/rules/noThenProperty) | AST-only | 2 / 2 |
| [`no-ts-ignore`](https://biomejs.dev/linter/rules/noTsIgnore) | AST-only | 1 / 1 |
| [`no-unassigned-variables`](https://biomejs.dev/linter/rules/noUnassignedVariables) | AST-only | 4 / 4 |
| [`no-unexpected-multiline`](https://eslint.org/docs/latest/rules/no-unexpected-multiline) | AST-only | 58 / 58 |
| [`no-unsafe-declaration-merging`](https://biomejs.dev/linter/rules/noUnsafeDeclarationMerging) | AST-only | 2 / 2 |
| [`no-unsafe-negation`](https://eslint.org/docs/latest/rules/no-unsafe-negation) | AST-only | 30 / 30 |
| [`no-unsafe-type-assertion`](https://typescript-eslint.io/rules/no-unsafe-type-assertion) | type-aware | 15 / 15 |
| [`no-unused-expressions`](https://eslint.org/docs/latest/rules/no-unused-expressions) | AST-only | 110 / 110 |
| [`no-useless-escape-in-string`](https://biomejs.dev/linter/rules/noUselessEscapeInString) | AST-only | 3 / 3 |
| [`no-useless-regex-backrefs`](https://biomejs.dev/linter/rules/noUselessRegexBackrefs) | AST-only | 3 / 3 |
| [`no-var`](https://biomejs.dev/linter/rules/noVar) | AST-only | 14 / 14 |
| [`no-with`](https://eslint.org/docs/latest/rules/no-with) | AST-only | 12 / 12 |
| [`prefer-namespace-keyword`](https://eslint.org/docs/latest/rules/prefer-namespace-keyword) | AST-only | 10 / 10 |
| [`promise-function-async`](https://typescript-eslint.io/rules/promise-function-async) | type-aware | 53 / 53 |
| [`restrict-plus-operands`](https://typescript-eslint.io/rules/restrict-plus-operands) | type-aware | 119 / 119 |
| [`restrict-template-expressions`](https://typescript-eslint.io/rules/restrict-template-expressions) | type-aware | 79 / 79 |
| [`return-await`](https://typescript-eslint.io/rules/return-await) | type-aware | 95 / 95 |
| [`strict-boolean-expressions`](https://typescript-eslint.io/rules/strict-boolean-expressions) | type-aware | 214 / 214 |
| [`unbound-method`](https://typescript-eslint.io/rules/unbound-method) | type-aware | 202 / 202 |
| [`use-await`](https://biomejs.dev/linter/rules/useAwait) | AST-only | 2 / 2 |
| [`use-error-message`](https://biomejs.dev/linter/rules/useErrorMessage) | AST-only | 2 / 2 |
| [`use-google-font-display`](https://biomejs.dev/linter/rules/useGoogleFontDisplay) | AST-only | 2 / 2 |
| [`use-iterable-callback-return`](https://biomejs.dev/linter/rules/useIterableCallbackReturn) | AST-only | 2 / 2 |
| [`use-number-to-fixed-digits-argument`](https://biomejs.dev/linter/rules/useNumberToFixedDigitsArgument) | AST-only | 2 / 2 |
| [`use-static-response-methods`](https://biomejs.dev/linter/rules/useStaticResponseMethods) | AST-only | 2 / 2 |
| [`use-strict-mode`](https://biomejs.dev/linter/rules/useStrictMode) | AST-only | 9 / 9 |

### security — 6 rules

Patterns enabling injection, eval, prototype pollution, or unsafe deserialization.

| Rule | Mode | Fixtures |
|---|:-:|---:|
| [`no-blank-target`](https://biomejs.dev/linter/rules/noBlankTarget) | AST-only | 2 / 2 |
| [`no-dangerously-set-inner-html`](https://biomejs.dev/linter/rules/noDangerouslySetInnerHtml) | AST-only | 4 / 4 |
| [`no-dangerously-set-inner-html-with-children`](https://biomejs.dev/linter/rules/noDangerouslySetInnerHtmlWithChildren) | AST-only | 2 / 2 |
| [`no-global-eval`](https://biomejs.dev/linter/rules/noGlobalEval) | AST-only | 3 / 3 |
| [`no-implied-eval`](https://typescript-eslint.io/rules/no-implied-eval) | type-aware | 70 / 70 |
| [`no-secrets`](https://biomejs.dev/linter/rules/noSecrets) | AST-only | 2 / 2 |

### performance — 16 rules

Known-slow patterns with a faster equivalent. No correctness impact.

| Rule | Mode | Fixtures |
|---|:-:|---:|
| [`no-accumulating-spread`](https://biomejs.dev/linter/rules/noAccumulatingSpread) | AST-only | 28 / 28 |
| [`no-await-in-loop`](https://eslint.org/docs/latest/rules/no-await-in-loop) | AST-only | 37 / 37 |
| [`no-barrel-file`](https://biomejs.dev/linter/rules/noBarrelFile) | AST-only | 7 / 7 |
| [`no-delete`](https://biomejs.dev/linter/rules/noDelete) | AST-only | 19 / 19 |
| [`no-dynamic-namespace-import-access`](https://biomejs.dev/linter/rules/noDynamicNamespaceImportAccess) | AST-only | 2 / 2 |
| [`no-img-element`](https://biomejs.dev/linter/rules/noImgElement) | AST-only | 2 / 2 |
| [`no-namespace-import`](https://biomejs.dev/linter/rules/noNamespaceImport) | AST-only | 2 / 2 |
| [`no-re-export-all`](https://biomejs.dev/linter/rules/noReExportAll) | AST-only | 3 / 3 |
| [`no-unwanted-polyfillio`](https://biomejs.dev/linter/rules/noUnwantedPolyfillio) | AST-only | 3 / 3 |
| [`prefer-find`](https://typescript-eslint.io/rules/prefer-find) | type-aware | 45 / 45 |
| [`prefer-includes`](https://typescript-eslint.io/rules/prefer-includes) | type-aware | 42 / 42 |
| [`prefer-regexp-exec`](https://typescript-eslint.io/rules/prefer-regexp-exec) | type-aware | 37 / 37 |
| [`prefer-string-starts-ends-with`](https://typescript-eslint.io/rules/prefer-string-starts-ends-with) | type-aware | 123 / 123 |
| [`use-google-font-preconnect`](https://biomejs.dev/linter/rules/useGoogleFontPreconnect) | AST-only | 2 / 2 |
| [`use-solid-for-component`](https://biomejs.dev/linter/rules/useSolidForComponent) | AST-only | 2 / 2 |
| [`use-top-level-regex`](https://biomejs.dev/linter/rules/useTopLevelRegex) | AST-only | 2 / 2 |

### complexity — 52 rules

Needless complication with a simpler equivalent. No correctness or perf impact.

| Rule | Mode | Fixtures |
|---|:-:|---:|
| [`no-adjacent-spaces-in-regex`](https://biomejs.dev/linter/rules/noAdjacentSpacesInRegex) | AST-only | 31 / 31 |
| [`no-arguments`](https://biomejs.dev/linter/rules/noArguments) | AST-only | 1 / 1 |
| [`no-comma-operator`](https://biomejs.dev/linter/rules/noCommaOperator) | AST-only | 29 / 29 |
| [`no-duplicate-type-constituents`](https://typescript-eslint.io/rules/no-duplicate-type-constituents) | type-aware | 82 / 82 |
| [`no-empty-type-parameters`](https://biomejs.dev/linter/rules/noEmptyTypeParameters) | AST-only | 2 / 2 |
| [`no-excessive-lines-per-function`](https://biomejs.dev/linter/rules/noExcessiveLinesPerFunction) | AST-only | 1 / 1 |
| [`no-excessive-nested-test-suites`](https://biomejs.dev/linter/rules/noExcessiveNestedTestSuites) | AST-only | 2 / 2 |
| [`no-extra-boolean-cast`](https://biomejs.dev/linter/rules/noExtraBooleanCast) | AST-only | 2 / 2 |
| [`no-flat-map-identity`](https://biomejs.dev/linter/rules/noFlatMapIdentity) | AST-only | 2 / 2 |
| [`no-for-each`](https://biomejs.dev/linter/rules/noForEach) | AST-only | 2 / 2 |
| [`no-redundant-type-constituents`](https://typescript-eslint.io/rules/no-redundant-type-constituents) | type-aware | 104 / 104 |
| [`no-restricted-types`](https://biomejs.dev/linter/rules/noRestrictedTypes) | AST-only | — |
| [`no-static-only-class`](https://biomejs.dev/linter/rules/noStaticOnlyClass) | AST-only | 2 / 2 |
| [`no-this-in-static`](https://biomejs.dev/linter/rules/noThisInStatic) | AST-only | 2 / 2 |
| [`no-unnecessary-boolean-literal-compare`](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare) | type-aware | 45 / 45 |
| [`no-unnecessary-condition`](https://typescript-eslint.io/rules/no-unnecessary-condition) | type-aware | 296 / 296 |
| [`no-unnecessary-qualifier`](https://typescript-eslint.io/rules/no-unnecessary-qualifier) | type-aware | 17 / 17 |
| [`no-unnecessary-template-expression`](https://typescript-eslint.io/rules/no-unnecessary-template-expression) | type-aware | 71 / 71 |
| [`no-unnecessary-type-arguments`](https://typescript-eslint.io/rules/no-unnecessary-type-arguments) | type-aware | 71 / 71 |
| [`no-unnecessary-type-assertion`](https://typescript-eslint.io/rules/no-unnecessary-type-assertion) | type-aware | 223 / 223 |
| [`no-unnecessary-type-conversion`](https://typescript-eslint.io/rules/no-unnecessary-type-conversion) | type-aware | 66 / 66 |
| [`no-unnecessary-type-parameters`](https://typescript-eslint.io/rules/no-unnecessary-type-parameters) | type-aware | 160 / 160 |
| [`no-useless-catch`](https://biomejs.dev/linter/rules/noUselessCatch) | AST-only | 2 / 2 |
| [`no-useless-catch-binding`](https://biomejs.dev/linter/rules/noUselessCatchBinding) | AST-only | 4 / 4 |
| [`no-useless-continue`](https://biomejs.dev/linter/rules/noUselessContinue) | AST-only | 2 / 2 |
| [`no-useless-default-assignment`](https://typescript-eslint.io/rules/no-useless-default-assignment) | type-aware | 83 / 83 |
| [`no-useless-empty-export`](https://biomejs.dev/linter/rules/noUselessEmptyExport) | AST-only | 8 / 8 |
| [`no-useless-label`](https://biomejs.dev/linter/rules/noUselessLabel) | AST-only | 36 / 36 |
| [`no-useless-rename`](https://biomejs.dev/linter/rules/noUselessRename) | AST-only | 2 / 2 |
| [`no-useless-string-concat`](https://biomejs.dev/linter/rules/noUselessStringConcat) | AST-only | 2 / 2 |
| [`no-useless-string-raw`](https://biomejs.dev/linter/rules/noUselessStringRaw) | AST-only | 2 / 2 |
| [`no-useless-switch-case`](https://biomejs.dev/linter/rules/noUselessSwitchCase) | AST-only | 2 / 2 |
| [`no-useless-ternary`](https://biomejs.dev/linter/rules/noUselessTernary) | AST-only | 3 / 3 |
| [`no-useless-type-constraint`](https://biomejs.dev/linter/rules/noUselessTypeConstraint) | AST-only | 3 / 3 |
| [`no-useless-undefined-initialization`](https://biomejs.dev/linter/rules/noUselessUndefinedInitialization) | AST-only | 2 / 2 |
| [`no-void`](https://biomejs.dev/linter/rules/noVoid) | AST-only | 2 / 2 |
| [`non-nullable-type-assertion-style`](https://typescript-eslint.io/rules/non-nullable-type-assertion-style) | type-aware | 20 / 20 |
| [`prefer-destructuring`](https://typescript-eslint.io/rules/prefer-destructuring) | type-aware | 92 / 92 |
| [`prefer-nullish-coalescing`](https://typescript-eslint.io/rules/prefer-nullish-coalescing) | type-aware | 617 / 617 |
| [`prefer-optional-chain`](https://typescript-eslint.io/rules/prefer-optional-chain) | type-aware | 45 / 45 |
| [`prefer-reduce-type-parameter`](https://typescript-eslint.io/rules/prefer-reduce-type-parameter) | type-aware | 31 / 31 |
| [`prefer-return-this-type`](https://typescript-eslint.io/rules/prefer-return-this-type) | type-aware | 21 / 21 |
| [`use-arrow-function`](https://biomejs.dev/linter/rules/useArrowFunction) | AST-only | 4 / 4 |
| [`use-date-now`](https://biomejs.dev/linter/rules/useDateNow) | AST-only | 2 / 2 |
| [`use-flat-map`](https://biomejs.dev/linter/rules/useFlatMap) | AST-only | 10 / 10 |
| [`use-index-of`](https://biomejs.dev/linter/rules/useIndexOf) | AST-only | 2 / 2 |
| [`use-literal-keys`](https://biomejs.dev/linter/rules/useLiteralKeys) | AST-only | 4 / 4 |
| [`use-max-params`](https://biomejs.dev/linter/rules/useMaxParams) | AST-only | 4 / 4 |
| [`use-numeric-literals`](https://biomejs.dev/linter/rules/useNumericLiterals) | AST-only | 3 / 3 |
| [`use-simple-number-keys`](https://biomejs.dev/linter/rules/useSimpleNumberKeys) | AST-only | 2 / 2 |
| [`use-simplified-logic-expression`](https://biomejs.dev/linter/rules/useSimplifiedLogicExpression) | AST-only | 2 / 2 |
| [`use-while`](https://biomejs.dev/linter/rules/useWhile) | AST-only | 2 / 2 |

### a11y — 36 rules

JSX patterns that break screen readers, keyboard navigation, or assistive tech. Mirrors biome's a11y category and jsx-a11y/eslint-plugin-jsx-a11y.

| Rule | Mode | Fixtures |
|---|:-:|---:|
| [`no-access-key`](https://biomejs.dev/linter/rules/noAccessKey) | AST-only | 2 / 2 |
| [`no-aria-hidden-on-focusable`](https://biomejs.dev/linter/rules/noAriaHiddenOnFocusable) | AST-only | 2 / 2 |
| [`no-aria-unsupported-elements`](https://biomejs.dev/linter/rules/noAriaUnsupportedElements) | AST-only | 2 / 2 |
| [`no-autofocus`](https://biomejs.dev/linter/rules/noAutofocus) | AST-only | 2 / 2 |
| [`no-distracting-elements`](https://biomejs.dev/linter/rules/noDistractingElements) | AST-only | 1 / 1 |
| [`no-header-scope`](https://biomejs.dev/linter/rules/noHeaderScope) | AST-only | 2 / 2 |
| [`no-interactive-element-to-noninteractive-role`](https://biomejs.dev/linter/rules/noInteractiveElementToNoninteractiveRole) | AST-only | 2 / 2 |
| [`no-label-without-control`](https://biomejs.dev/linter/rules/noLabelWithoutControl) | AST-only | 2 / 2 |
| [`no-noninteractive-element-interactions`](https://biomejs.dev/linter/rules/noNoninteractiveElementInteractions) | AST-only | 2 / 2 |
| [`no-noninteractive-element-to-interactive-role`](https://biomejs.dev/linter/rules/noNoninteractiveElementToInteractiveRole) | AST-only | 2 / 2 |
| [`no-noninteractive-tabindex`](https://biomejs.dev/linter/rules/noNoninteractiveTabindex) | AST-only | 2 / 2 |
| [`no-positive-tabindex`](https://biomejs.dev/linter/rules/noPositiveTabindex) | AST-only | 4 / 4 |
| [`no-redundant-alt`](https://biomejs.dev/linter/rules/noRedundantAlt) | AST-only | 2 / 2 |
| [`no-redundant-roles`](https://biomejs.dev/linter/rules/noRedundantRoles) | AST-only | 3 / 3 |
| [`no-static-element-interactions`](https://biomejs.dev/linter/rules/noStaticElementInteractions) | AST-only | 2 / 2 |
| [`no-svg-without-title`](https://biomejs.dev/linter/rules/noSvgWithoutTitle) | AST-only | 2 / 2 |
| [`use-alt-text`](https://biomejs.dev/linter/rules/useAltText) | AST-only | 3 / 3 |
| [`use-anchor-content`](https://biomejs.dev/linter/rules/useAnchorContent) | AST-only | 2 / 2 |
| [`use-aria-activedescendant-with-tabindex`](https://biomejs.dev/linter/rules/useAriaActivedescendantWithTabindex) | AST-only | 2 / 2 |
| [`use-aria-props-for-role`](https://biomejs.dev/linter/rules/useAriaPropsForRole) | AST-only | 2 / 2 |
| [`use-aria-props-supported-by-role`](https://biomejs.dev/linter/rules/useAriaPropsSupportedByRole) | AST-only | 3 / 3 |
| [`use-button-type`](https://biomejs.dev/linter/rules/useButtonType) | AST-only | 0 / 0 |
| [`use-focusable-interactive`](https://biomejs.dev/linter/rules/useFocusableInteractive) | AST-only | 2 / 2 |
| [`use-heading-content`](https://biomejs.dev/linter/rules/useHeadingContent) | AST-only | 2 / 2 |
| [`use-html-lang`](https://biomejs.dev/linter/rules/useHtmlLang) | AST-only | 2 / 2 |
| [`use-iframe-title`](https://biomejs.dev/linter/rules/useIframeTitle) | AST-only | 2 / 2 |
| [`use-key-with-click-events`](https://biomejs.dev/linter/rules/useKeyWithClickEvents) | AST-only | 2 / 2 |
| [`use-key-with-mouse-events`](https://biomejs.dev/linter/rules/useKeyWithMouseEvents) | AST-only | 2 / 2 |
| [`use-media-caption`](https://biomejs.dev/linter/rules/useMediaCaption) | AST-only | 2 / 2 |
| [`use-semantic-elements`](https://biomejs.dev/linter/rules/useSemanticElements) | AST-only | 3 / 3 |
| [`use-valid-anchor`](https://biomejs.dev/linter/rules/useValidAnchor) | AST-only | 2 / 2 |
| [`use-valid-aria-props`](https://biomejs.dev/linter/rules/useValidAriaProps) | AST-only | 2 / 2 |
| [`use-valid-aria-role`](https://biomejs.dev/linter/rules/useValidAriaRole) | AST-only | 2 / 2 |
| [`use-valid-aria-values`](https://biomejs.dev/linter/rules/useValidAriaValues) | AST-only | 2 / 2 |
| [`use-valid-autocomplete`](https://biomejs.dev/linter/rules/useValidAutocomplete) | AST-only | 0 / 0 |
| [`use-valid-lang`](https://biomejs.dev/linter/rules/useValidLang) | AST-only | 2 / 2 |

### style — 61 rules

Formatting, naming, ordering. Pure preference; team-configurable.

| Rule | Mode | Fixtures |
|---|:-:|---:|
| [`consistent-type-exports`](https://typescript-eslint.io/rules/consistent-type-exports) | type-aware | 47 / 47 |
| [`dot-notation`](https://typescript-eslint.io/rules/dot-notation) | type-aware | 61 / 61 |
| [`naming-convention`](https://typescript-eslint.io/rules/naming-convention) | type-aware | 88 / 88 |
| [`no-common-js`](https://biomejs.dev/linter/rules/noCommonJs) | AST-only | 2 / 2 |
| [`no-default-export`](https://biomejs.dev/linter/rules/noDefaultExport) | AST-only | 13 / 13 |
| [`no-done-callback`](https://biomejs.dev/linter/rules/noDoneCallback) | AST-only | 2 / 2 |
| [`no-duplicate-imports`](https://eslint.org/docs/latest/rules/no-duplicate-imports) | AST-only | 86 / 86 |
| [`no-enum`](https://biomejs.dev/linter/rules/noEnum) | AST-only | 2 / 2 |
| [`no-exported-imports`](https://biomejs.dev/linter/rules/noExportedImports) | AST-only | 2 / 2 |
| [`no-head-element`](https://biomejs.dev/linter/rules/noHeadElement) | AST-only | — |
| [`no-implicit-boolean`](https://biomejs.dev/linter/rules/noImplicitBoolean) | AST-only | 2 / 2 |
| [`no-meaningless-void-operator`](https://typescript-eslint.io/rules/no-meaningless-void-operator) | type-aware | 5 / 5 |
| [`no-namespace`](https://biomejs.dev/linter/rules/noNamespace) | AST-only | 2 / 2 |
| [`no-negation-else`](https://biomejs.dev/linter/rules/noNegationElse) | AST-only | 3 / 3 |
| [`no-nested-ternary`](https://biomejs.dev/linter/rules/noNestedTernary) | AST-only | 2 / 2 |
| [`no-non-null-assertion`](https://biomejs.dev/linter/rules/noNonNullAssertion) | AST-only | 2 / 2 |
| [`no-parameter-assign`](https://biomejs.dev/linter/rules/noParameterAssign) | AST-only | 68 / 68 |
| [`no-parameter-properties`](https://biomejs.dev/linter/rules/noParameterProperties) | AST-only | 2 / 2 |
| [`no-process-env`](https://biomejs.dev/linter/rules/noProcessEnv) | AST-only | 6 / 6 |
| [`no-restricted-globals`](https://biomejs.dev/linter/rules/noRestrictedGlobals) | AST-only | 3 / 3 |
| [`no-restricted-imports`](https://biomejs.dev/linter/rules/noRestrictedImports) | AST-only | — |
| [`no-shouty-constants`](https://biomejs.dev/linter/rules/noShoutyConstants) | AST-only | 2 / 2 |
| [`no-substr`](https://biomejs.dev/linter/rules/noSubstr) | AST-only | 2 / 2 |
| [`no-unused-template-literal`](https://biomejs.dev/linter/rules/noUnusedTemplateLiteral) | AST-only | 2 / 2 |
| [`no-useless-else`](https://biomejs.dev/linter/rules/noUselessElse) | AST-only | 3 / 3 |
| [`no-yoda-expression`](https://biomejs.dev/linter/rules/noYodaExpression) | AST-only | 4 / 4 |
| [`prefer-readonly`](https://typescript-eslint.io/rules/prefer-readonly) | type-aware | 162 / 162 |
| [`prefer-readonly-parameter-types`](https://typescript-eslint.io/rules/prefer-readonly-parameter-types) | type-aware | 130 / 130 |
| [`use-array-literals`](https://biomejs.dev/linter/rules/useArrayLiterals) | AST-only | 4 / 4 |
| [`use-as-const-assertion`](https://biomejs.dev/linter/rules/useAsConstAssertion) | AST-only | 2 / 2 |
| [`use-block-statements`](https://biomejs.dev/linter/rules/useBlockStatements) | AST-only | 1 / 1 |
| [`use-collapsed-else-if`](https://biomejs.dev/linter/rules/useCollapsedElseIf) | AST-only | 2 / 2 |
| [`use-collapsed-if`](https://biomejs.dev/linter/rules/useCollapsedIf) | AST-only | 2 / 2 |
| [`use-consistent-array-type`](https://biomejs.dev/linter/rules/useConsistentArrayType) | AST-only | 2 / 2 |
| [`use-consistent-arrow-return`](https://biomejs.dev/linter/rules/useConsistentArrowReturn) | AST-only | 2 / 2 |
| [`use-consistent-builtin-instantiation`](https://biomejs.dev/linter/rules/useConsistentBuiltinInstantiation) | AST-only | 2 / 2 |
| [`use-consistent-member-accessibility`](https://biomejs.dev/linter/rules/useConsistentMemberAccessibility) | AST-only | — |
| [`use-consistent-object-definitions`](https://biomejs.dev/linter/rules/useConsistentObjectDefinitions) | AST-only | — |
| [`use-consistent-type-definitions`](https://biomejs.dev/linter/rules/useConsistentTypeDefinitions) | AST-only | 2 / 2 |
| [`use-default-parameter-last`](https://biomejs.dev/linter/rules/useDefaultParameterLast) | AST-only | 4 / 4 |
| [`use-enum-initializers`](https://biomejs.dev/linter/rules/useEnumInitializers) | AST-only | 2 / 2 |
| [`use-explicit-length-check`](https://biomejs.dev/linter/rules/useExplicitLengthCheck) | AST-only | 2 / 2 |
| [`use-exponentiation-operator`](https://biomejs.dev/linter/rules/useExponentiationOperator) | AST-only | 12 / 12 |
| [`use-exports-last`](https://biomejs.dev/linter/rules/useExportsLast) | AST-only | 14 / 14 |
| [`use-for-of`](https://biomejs.dev/linter/rules/useForOf) | AST-only | 2 / 2 |
| [`use-fragment-syntax`](https://biomejs.dev/linter/rules/useFragmentSyntax) | AST-only | 2 / 2 |
| [`use-grouped-accessor-pairs`](https://biomejs.dev/linter/rules/useGroupedAccessorPairs) | AST-only | 2 / 2 |
| [`use-node-assert-strict`](https://biomejs.dev/linter/rules/useNodeAssertStrict) | AST-only | 3 / 3 |
| [`use-nodejs-import-protocol`](https://biomejs.dev/linter/rules/useNodejsImportProtocol) | AST-only | 3 / 3 |
| [`use-number-namespace`](https://biomejs.dev/linter/rules/useNumberNamespace) | AST-only | 3 / 3 |
| [`use-numeric-separators`](https://biomejs.dev/linter/rules/useNumericSeparators) | AST-only | 2 / 2 |
| [`use-object-spread`](https://biomejs.dev/linter/rules/useObjectSpread) | AST-only | 5 / 5 |
| [`use-react-function-components`](https://biomejs.dev/linter/rules/useReactFunctionComponents) | AST-only | 2 / 2 |
| [`use-self-closing-elements`](https://biomejs.dev/linter/rules/useSelfClosingElements) | AST-only | 2 / 2 |
| [`use-shorthand-assign`](https://biomejs.dev/linter/rules/useShorthandAssign) | AST-only | 2 / 2 |
| [`use-shorthand-function-type`](https://biomejs.dev/linter/rules/useShorthandFunctionType) | AST-only | 2 / 2 |
| [`use-single-var-declarator`](https://biomejs.dev/linter/rules/useSingleVarDeclarator) | AST-only | 2 / 2 |
| [`use-symbol-description`](https://biomejs.dev/linter/rules/useSymbolDescription) | AST-only | 2 / 2 |
| [`use-throw-new-error`](https://biomejs.dev/linter/rules/useThrowNewError) | AST-only | 2 / 2 |
| [`use-throw-only-error`](https://biomejs.dev/linter/rules/useThrowOnlyError) | AST-only | 2 / 2 |
| [`use-trim-start-end`](https://biomejs.dev/linter/rules/useTrimStartEnd) | AST-only | 2 / 2 |

### nursery — 0 rules

New or iterating rules. May change shape or move to another group. Not included in the recommended preset. Empty today.

## Reproducing the compatibility scores

Every rule has a vendored fixture (or inline test cases) and a Go
harness. From the jetlint repo:

```bash
# typescript-eslint ports (type-aware rules)
go test -count=1 -run TypescriptEslintCompatibility -v \
  ./internal/rules/<rule-package>/

# biome + ESLint-core ports (AST-only rules)
go test -count=1 -run EslintCompatibility -v \
  ./internal/rules/<rule-package>/
```

The aggregate validates all 373 rules against **11723 cases** in one
go. See [`docs/OXLINT-COMPAT-OVERVIEW.md`](https://github.com/jetlint/jetlint/blob/main/docs/OXLINT-COMPAT-OVERVIEW.md)
for the AST-only fixture format and how to regenerate from a fresh
oxc/biome checkout.
