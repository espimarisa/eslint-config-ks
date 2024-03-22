// @ts-check

import eslintPluginYML from "eslint-plugin-yml";
import ymlParser from "yaml-eslint-parser";

import yamlRules from "../rules/yaml.mjs";

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} */
export const ymlConfig = {
  files: ["**/*.{yaml,yml}"],
  languageOptions: {
    parser: ymlParser,
  },
  plugins: {
    yml: eslintPluginYML,
  },
  rules: {
    ...yamlRules,
  },
};
