// @ts-check

// @ts-expect-error This library has no typings
import eslintPluginVue from "eslint-plugin-vue";

/** @type {import("eslint").Linter.RulesRecord} */

const vueRules = {
	...eslintPluginVue.configs.essential.rules,
	...eslintPluginVue.configs["vue3-recommended"].rules,
	...eslintPluginVue.configs["vue3-recommended"].rules,

	// Prettier is not compatible *out of the box* with Svelte
	// TODO: Document this in the README.md
	// "prettier/prettier": "off",
};

export default vueRules;
