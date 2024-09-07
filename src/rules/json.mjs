// @ts-check

import { configs } from "eslint-plugin-jsonc";

/** @type {import("eslint").Linter.RulesRecord} */
const jsonCRules = {
	// @ts-expect-error This does exist, type is messed up
	...configs["flat/recommended-with-jsonc"].rules,
	"jsonc/no-binary-expression": "warn",
	"jsonc/no-binary-numeric-literals": "warn",
	"jsonc/no-escape-sequence-in-identifier": "warn",
	"jsonc/no-hexadecimal-numeric-literals": "warn",
	"jsonc/no-number-props": "warn",
	"jsonc/no-numeric-separators": "warn",
	"jsonc/no-octal-numeric-literals": "warn",
	"jsonc/no-parenthesized": "warn",
	"jsonc/no-plus-sign": "warn",
	"jsonc/no-template-literals": "warn",
	"jsonc/no-unicode-codepoint-escapes": "warn",
	"jsonc/valid-json-number": "warn",
	"jsonc/no-comments": "error",
};

export const json5Rules = {
	// @ts-expect-error This does exist, type is messed up
	...configs["flat/recommended-with-json5"].rules,
	...jsonCRules,
	"jsonc/no-comments": "off",
	"jsonc/no-hexadecimal-numeric-literals": "off",
	"jsonc/no-plus-sign": "off",
	"jsonc/valid-json-number": "off",
};

export default jsonCRules;
