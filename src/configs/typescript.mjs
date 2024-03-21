// @ts-check

/**
 * JavaScript config
 * This config is for TypeScript. It enables @typescript-eslint support.
 */

import tseslint from "typescript-eslint";

import typescriptRules from "../rules/typescript.mjs";

/**
 * Generates a TypeScript ESLint config
 * @param {string[] | boolean | undefined} project A path pointing to a tsconfig/a boolean enabling the default behaviour
 * @returns An ESLint config for TypeScript
 */

export const typescriptConfig = (project) => {
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
      ...typescriptRules,
    },
  };

  return config;
};
