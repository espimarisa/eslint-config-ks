// @ts-check

/** @type {import("eslint").Linter.RulesRecord} */
const javascriptRules = {
	// Enable JS alternatives for some TS rules
	"prefer-const": ["error", { destructuring: "any", ignoreReadBeforeAssign: false }],

	// If you use these, you are really, really stupid
	"no-var": "error",
	"no-new-object": "error",
	"no-array-constructor": "error",

	// Disables rules that don't apply to JS code
	"@typescript-eslint/internal/no-poorly-typed-ts-props": "off",
	"@typescript-eslint/explicit-function-return-type": "off",
	"@typescript-eslint/explicit-member-accessibility": "off",
};

export default javascriptRules;
