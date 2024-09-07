// @ts-check

// @ts-expect-error This plugin has no typings
import eslintPluginMarkdown from "eslint-plugin-markdown";

/** @type {import("eslint").Linter.RulesRecord} */
const markdownRules = {
	...eslintPluginMarkdown.configs.recommended[2].rules,

	// A tad stupid in markdown
	"n/no-missing-import": "off",
};

export default markdownRules;
