// @ts-check

import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

import prettierRules from "../rules/prettier.mjs";

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} */
export const prettierConfig = {
  ...eslintPluginPrettier,
  rules: prettierRules,
};
