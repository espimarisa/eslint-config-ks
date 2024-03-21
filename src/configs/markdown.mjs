// @ts-check

/**
 * Markdown config
 * This config is for enabling Markdown support.
 */

// @ts-expect-error Library has no typings
import eslintPluginMarkdown from "eslint-plugin-markdown";

import markdownRules from "../rules/markdown.mjs";

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} */
export const markdownConfig = {
  files: ["**/*.{markdown,md}"],
  processor: "markdown/markdown",
  plugins: {
    markdown: eslintPluginMarkdown,
  },
  rules: {
    ...markdownRules,
  },
};
