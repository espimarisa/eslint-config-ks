// @ts-check

/**
 * Svelte config
 * This config is for enabling Svelte support.
 */

import eslintPluginSvelte from "eslint-plugin-svelte";
import svelteEslintParser from "svelte-eslint-parser";
import tseslint from "typescript-eslint";

import svelteRules from "../rules/svelte.mjs";
import typescriptRules from "../rules/typescript.mjs";

/**
 * Generates an Svelte ESLint config
 * @param {boolean | undefined} typescript Whether to enable TypeScript support. Defaults to "true".
 * @param {string[] | boolean | undefined} project A path pointing to a tsconfig/a boolean enabling the default behaviour
 * @returns An ESLint config for Svelte
 */

export const svelteConfig = (typescript, project) => {
  /** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} */

  const config = {
    files: ["**/*.svelte"],
    plugins: {
      "svelte": eslintPluginSvelte,
      "@typescript-eslint": tseslint.plugin,
    },
    processor: eslintPluginSvelte.processors[".svelte"],
    languageOptions: {
      parser: svelteEslintParser,
      parserOptions: {
        // TS support
        project: project ?? true,
        parser: typescript ? tseslint.parser : undefined,
        extraFileExtensions: [".svelte"],
      },
    },
    rules: {
      ...svelteRules,
      ...typescriptRules,
    },
  };

  return config;
};
