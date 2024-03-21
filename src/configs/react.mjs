// @ts-check

/**
 * React config
 * This config is for enabling React support.
 */

// @ts-expect-error This library has no typings
import eslintPluginJSXA11y from "eslint-plugin-jsx-a11y";
// @ts-expect-error This plugin has no typings
import eslintPluginReact from "eslint-plugin-react";
// @ts-expect-error This plugin has no typings
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

import reactRules from "../rules/react.mjs";

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} */
export const reactConfig = {
  // JSX config
  files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
  plugins: {
    "react": eslintPluginReact,
    "react-hooks": eslintPluginReactHooks,
    "jsx-a11y": eslintPluginJSXA11y,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
    },
  },
  rules: {
    ...reactRules,
  },
};
