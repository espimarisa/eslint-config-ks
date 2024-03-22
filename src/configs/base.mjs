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
import globals from "globals";

import baseRules from "../rules/base.mjs";
import importRules from "../rules/import.mjs";
import nodeRules from "../rules/node.mjs";
import promiseRules from "../rules/promise.mjs";
import securityRules from "../rules/security.mjs";
import unicornRules from "../rules/unicorn.mjs";

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} */
export const baseConfig = {
  // Universal rules for both TS and JS
  files: ["**/*.{cjs,cts,js,jsx,mjs,mts,ts,tsx}"],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2021,
    },
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      jsx: true,
    },
  },
  settings: {
    // Configures import parser
    "import-x/parsers": {
      "espree": [".cjs", ".js", ".jsx"],
      "@typescript-eslint/parser": [".cts", ".mts", ".ts", ".tsx"],
    },

    // Configures import resolver
    "import-x/resolver": {
      node: true,
    },
  },
  rules: {
    // Base rules for both JS and TS
    ...baseRules,
    // Rules from eslint-plugin-promise
    ...promiseRules,
    // Rules from eslint-plugin-unicorn
    ...unicornRules,
    // Rules from eslint-plugin-security
    ...securityRules,
    // Rules from eslint-plugin-node
    ...nodeRules,
    // Rules from eslint-plugin-import-x and eslint-plugin-simple-import-sort
    ...importRules,
  },
  plugins: {
    "import-x": eslintPluginImportX,
    "n": eslintPluginNode,
    "promise": eslintPluginPromise,
    "security": eslintPluginSecurity,
    "simple-import-sort": eslintPluginSimpleImportSort,
    "unicorn": eslintPluginUnicorn,
  },
};
