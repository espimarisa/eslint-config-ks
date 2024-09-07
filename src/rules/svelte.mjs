// @ts-check

import eslintPluginSvelte from "eslint-plugin-svelte";

/** @type {import("eslint").Linter.RulesRecord} */

const svelteRules = {
	...eslintPluginSvelte.configs.recommended.rules,

	// Prettier is not compatible *out of the box* with Svelte
	// TODO: Document this in the README.md
	"prettier/prettier": "off",
};

export default svelteRules;
