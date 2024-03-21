// @ts-check

/**
 * JSON config
 * This config is for enabling JSON and JSON5 support.
 */

import eslintPluginJsonC from "eslint-plugin-jsonc";
import jsoncEslintParser from "jsonc-eslint-parser";

import jsonCRules, { json5Rules } from "../rules/json.mjs";

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} */
export const jsonConfig = {
  files: ["**/*.{json,jsonc}"],
  languageOptions: {
    parser: jsoncEslintParser,
  },
  plugins: {
    jsonc: eslintPluginJsonC,
  },
  rules: {
    ...jsonCRules,
  },
};

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} */
export const json5Config = {
  // JSON5 support
  files: ["**/*.{json5}"],
  languageOptions: {
    parser: jsoncEslintParser,
  },
  plugins: {
    jsonc: eslintPluginJsonC,
  },
  rules: {
    ...json5Rules,
  },
};
