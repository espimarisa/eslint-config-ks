// @ts-check

import eslintPluginUnicorn from "eslint-plugin-unicorn";

/** @type {import("eslint").Linter.RulesRecord} */
const unicornRules = {
	...eslintPluginUnicorn.configs["flat/recommended"].rules,

	// This is really annoying
	"unicorn/filename-case": "off",
	"unicorn/prevent-abbreviations": "off",
};

export default unicornRules;
