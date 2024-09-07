// @ts-check

// @ts-expect-error This plugin has no typings
import eslintPluginJSXA11y from "eslint-plugin-jsx-a11y";
// @ts-expect-error This plugin has no typings
import eslintPluginReact from "eslint-plugin-react";
// @ts-expect-error This plugin has no typings
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import("eslint").Linter.RulesRecord} */
const reactRules = {
	...eslintPluginReact.configs.recommended.rules,
	...eslintPluginJSXA11y.configs.recommended.rules,
	...eslintPluginReactHooks.configs.recommended.rules,

	// Breakage!
	"n/no-unpublished-import": "off",
};

export default reactRules;
