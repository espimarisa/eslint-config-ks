// @ts-check

import eslintPluginImportX from "eslint-plugin-import-x";

/** @type {import("eslint").Linter.RulesRecord} */
const importRules = {
	...eslintPluginImportX.configs.recommended.rules,

	// Automatically sort imports and exports
	"simple-import-sort/imports": "warn",
	"simple-import-sort/exports": "warn",

	// Causes breakage with pnpm and other package managers
	"import-x/no-unresolved": "off",

	// eslint-plugin-import-x rules
	"import-x/no-deprecated": "off",
};

export default importRules;
