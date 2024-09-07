// @ts-check

/**
 * React config
 * This config is for enabling React support.
 */

import eslintPluginImportX from "eslint-plugin-import-x";
// @ts-expect-error This library has no typings
import eslintPluginJSXA11y from "eslint-plugin-jsx-a11y";
import eslintPluginNode from "eslint-plugin-n";
// @ts-expect-error Library has no typings
import eslintPluginPromise from "eslint-plugin-promise";
// @ts-expect-error This plugin has no typings
import eslintPluginReact from "eslint-plugin-react";
// @ts-expect-error This plugin has no typings
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
// @ts-expect-error Library has no typings
import eslintPluginSecurity from "eslint-plugin-security";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
// @ts-expect-error Library has no typings
import * as espree from "espree";
import globals from "globals";
import tseslint from "typescript-eslint";

import extendedBaseRules from "../rules/extendedBase.mjs";
import reactRules from "../rules/react.mjs";
import { generateTypescriptRules } from "../rules/typescript.mjs";

/**
 * Generates a React ESLint config
 * @param {boolean | undefined} typescript Whether to enable TypeScript support. Defaults to true.
 * @param {string[] | boolean | undefined} project A path pointing to a tsconfig/a boolean enabling the default behaviour
 * @returns {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} An ESLint config for React
 */

export const reactConfig = (typescript, project) => {
	/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} */
	const config = {
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
		plugins: {
			"@typescript-eslint": tseslint.plugin,
			react: eslintPluginReact,
			"react-hooks": eslintPluginReactHooks,
			"jsx-a11y": eslintPluginJSXA11y,
			"import-x": eslintPluginImportX,
			n: eslintPluginNode,
			promise: eslintPluginPromise,
			security: eslintPluginSecurity,
			"simple-import-sort": eslintPluginSimpleImportSort,
			unicorn: eslintPluginUnicorn,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		languageOptions: {
			parser: typescript ? tseslint.parser : espree,
			parserOptions: {
				project: project ?? true,
				parser: typescript ? tseslint.parser : espree,
				ecmaVersion: "latest",
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
			},
		},
		rules: {
			...extendedBaseRules,
			...generateTypescriptRules(typescript),
			...reactRules,
		},
	};

	return config;
};
