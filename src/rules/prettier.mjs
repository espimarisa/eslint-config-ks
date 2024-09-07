// @ts-check

import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

/** @type {import("eslint").Linter.RulesRecord} */
const prettierRules = {
	...eslintPluginPrettier.rules,

	"no-inline-comments": "warn",
	"spaced-comment": ["warn", "always"],
};

export default prettierRules;
