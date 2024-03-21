// @ts-check

// @ts-expect-error This plugin has no typings
import eslintPluginMarkdown from "eslint-plugin-markdown";

/** @type {import("eslint").Linter.RulesRecord} */
const markdownRules = {
  ...eslintPluginMarkdown.configs.recommended[2].rules,
};

export default markdownRules;
