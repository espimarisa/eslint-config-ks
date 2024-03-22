// @ts-check

import eslintPluginImportX from "eslint-plugin-import-x";
// @ts-expect-error Library has no typings
import eslintPluginNode from "eslint-plugin-n";
// @ts-expect-error Library has no typings
import eslintPluginPromise from "eslint-plugin-promise";
// @ts-expect-error Library has no typings
import eslintPluginSecurity from "eslint-plugin-security";
// @ts-expect-error Library has no typings
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginSvelte from "eslint-plugin-svelte";
// @ts-expect-error Library has no typings
import eslintPluginUnicorn from "eslint-plugin-unicorn";
// @ts-expect-error This library has no typings
import * as espree from "espree";
import svelteEslintParser from "svelte-eslint-parser";
import tseslint from "typescript-eslint";

import extendedBaseRules from "../rules/extendedBase.mjs";
import svelteRules from "../rules/svelte.mjs";
import { generateTypescriptRules } from "../rules/typescript.mjs";
/**
 * Generates a Svelte ESLint config
 * @param {boolean | undefined} typescript Toggles TypeScript support. Defaults to true.
 * @param {string[] | boolean | undefined} project A path pointing to a tsconfig. Defaults to true to enable default behavior.
 * @returns {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} An ESLint config for Svelte.
 */

export const svelteConfig = (typescript, project) => {
  /** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} */
  const config = {
    files: ["**/*.svelte"],
    plugins: {
      "svelte": eslintPluginSvelte,
      "@typescript-eslint": tseslint.plugin,
      "import-x": eslintPluginImportX,
      "n": eslintPluginNode,
      "promise": eslintPluginPromise,
      "security": eslintPluginSecurity,
      "simple-import-sort": eslintPluginSimpleImportSort,
      "unicorn": eslintPluginUnicorn,
    },
    processor: eslintPluginSvelte.processors[".svelte"],
    languageOptions: {
      parser: svelteEslintParser,
      parserOptions: {
        // TS support
        project: project ?? true,
        parser: typescript ? tseslint.parser : espree,
        extraFileExtensions: [".svelte"],
      },
    },
    rules: {
      ...extendedBaseRules,
      ...generateTypescriptRules(typescript),
      ...svelteRules,
    },
  };

  return config;
};
