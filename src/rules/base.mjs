// @ts-check

import eslint from "@eslint/js";

/** @type {import("eslint").Linter.RulesRecord} */
const baseRules = {
  ...eslint.configs.recommended.rules,

  // Force "this" to be consistent
  "consistent-this": ["error", "self"],

  // Force usage of === in most places
  "eqeqeq": ["error", "smart"],

  // Disallow ternary operators if a simpler method exists
  "no-unneeded-ternary": "warn",

  // Avoid overly complex depth and callbacks
  "max-depth": ["warn", 4],
  "max-nested-callbacks": ["warn", 8],
};

export default baseRules;
