// @ts-check

/**
 * TOML config
 * This config is for enabling TOML (Tomlin) support.
 */

import eslintPluginTOML from "eslint-plugin-toml";
import tomlParser from "toml-eslint-parser";

import tomlRules from "../rules/toml.mjs";

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} */
export const tomlConfig = {
  files: ["**/*.toml"],
  languageOptions: {
    parser: tomlParser,
  },
  plugins: {
    toml: eslintPluginTOML,
  },
  rules: {
    ...tomlRules,
  },
};
