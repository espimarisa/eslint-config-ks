// @ts-check

import eslintPluginAstro from "eslint-plugin-astro";
// @ts-expect-error This library has no typings
import eslintPluginJSXA11y from "eslint-plugin-jsx-a11y";

/** @type {import("eslint").Linter.RulesRecord} */

const astroRules = {
  ...eslintPluginAstro.configs["recommended"].rules,
  ...eslintPluginJSXA11y.configs.recommended.rules,

  // Prettier is not compatible *out of the box* with Astro
  // TODO: Document this in the README.md
  "prettier/prettier": "off",
};

export default astroRules;
