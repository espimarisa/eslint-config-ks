// @ts-check

import tseslint from "typescript-eslint";

import { generateTypescriptRules } from "../rules/typescript.mjs";

/**
 * Generates a TypeScript ESLint config
 * @param {boolean | undefined} enabled Toggles TypeScript support. Defaults to true.
 * @param {string[] | boolean | undefined} project A path pointing to a tsconfig. Defaults to true to enable default behavior.
 * @returns {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} An ESLint config for TypeScript.
 */

export const typescriptConfig = (enabled, project) => {
  if (enabled === false) return {};

  /** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} */
  const config = {
    // TypeScript config
    files: ["**/*.{cts,mts,ts,tsx}"],

    // Enables typescript-eslint parser
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: project ?? true,
      },
    },
    settings: {
      "import-x/resolver": {
        node: true,
        typescript: true,
      },
    },
    plugins: {
      // Enables @typescript-eslint plugin
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      ...generateTypescriptRules(enabled),
    },
  };

  return config;
};
