// @ts-check

import astroEslintParser from "astro-eslint-parser";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginImportX from "eslint-plugin-import-x";
// @ts-expect-error This library has no typings
import eslintPluginJSXA11y from "eslint-plugin-jsx-a11y";
// @ts-expect-error Library has no typings
import eslintPluginNode from "eslint-plugin-n";
// @ts-expect-error Library has no typings
import eslintPluginPromise from "eslint-plugin-promise";
// @ts-expect-error Library has no typings
import eslintPluginSecurity from "eslint-plugin-security";
// @ts-expect-error Library has no typings
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
// @ts-expect-error Library has no typings
import eslintPluginUnicorn from "eslint-plugin-unicorn";
// @ts-expect-error This library has no typings
import * as espree from "espree";
import tseslint from "typescript-eslint";

import astroRules from "../rules/astro.mjs";
import extendedBaseRules from "../rules/extendedBase.mjs";
import { generateTypescriptRules } from "../rules/typescript.mjs";

/**
 * Generates an Astro ESLint config
 * @param {boolean | undefined} typescript Toggles TypeScript support. Defaults to true.
 * @param {string[] | boolean | undefined} project A path pointing to a tsconfig. Defaults to true to enable default behavior.
 * @returns {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} An ESLint config for Astro.
 */

export const astroConfig = (typescript, project) => {
  /** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} */
  const config = {
    // .astro files
    files: ["**/*.astro"],
    plugins: {
      "astro": eslintPluginAstro,
      "@typescript-eslint": tseslint.plugin,
      "jsx-a11y": eslintPluginJSXA11y,
      "import-x": eslintPluginImportX,
      "n": eslintPluginNode,
      "promise": eslintPluginPromise,
      "security": eslintPluginSecurity,
      "simple-import-sort": eslintPluginSimpleImportSort,
      "unicorn": eslintPluginUnicorn,
    },
    processor: eslintPluginAstro.processors[".astro"],
    languageOptions: {
      parser: astroEslintParser,
      parserOptions: {
        // TS support
        project: project ?? true,
        parser: typescript ? tseslint.parser : espree,
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      ...extendedBaseRules,
      ...generateTypescriptRules(typescript),
      ...astroRules,
    },
  };

  return config;
};
