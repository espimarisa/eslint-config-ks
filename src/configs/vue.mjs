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
// @ts-expect-error Library has no typings
import eslintPluginUnicorn from "eslint-plugin-unicorn";
// @ts-expect-error Library has no typings
import eslintPluginVue from "eslint-plugin-vue";
// @ts-expect-error This library has no typings
import * as espree from "espree";
import tseslint from "typescript-eslint";
import vueEslintParser from "vue-eslint-parser";

import extendedBaseRules from "../rules/extendedBase.mjs";
import { generateTypescriptRules } from "../rules/typescript.mjs";
import vueRules from "../rules/vue.mjs";

/**
 * Generates a Vue ESLint config
 * @param {boolean | undefined} typescript Toggles TypeScript support. Defaults to true.
 * @param {string[] | boolean | undefined} project A path pointing to a tsconfig. Defaults to true to enable default behavior.
 * @returns {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} An ESLint config for Vue.
 */

export const vueConfig = (typescript, project) => {
  /** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} */
  const config = {
    files: ["**/*.vue"],
    plugins: {
      "vue": eslintPluginVue,
      "@typescript-eslint": tseslint.plugin,
      "import-x": eslintPluginImportX,
      "n": eslintPluginNode,
      "promise": eslintPluginPromise,
      "security": eslintPluginSecurity,
      "simple-import-sort": eslintPluginSimpleImportSort,
      "unicorn": eslintPluginUnicorn,
    },
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        // TS support
        project: project ?? true,
        parser: typescript ? tseslint.parser : espree,
      },
    },
    rules: {
      ...extendedBaseRules,
      ...generateTypescriptRules(typescript),
      ...vueRules,
    },
  };

  return config;
};
