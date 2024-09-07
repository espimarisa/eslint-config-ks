// @ts-check

import javascriptRules from "../rules/javascript.mjs";

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} */
export const javascriptConfig = {
	// JS only config, enables some specific JS rules
	files: ["**/*.{cjs,js,jsx,mjs}"],
	rules: {
		...javascriptRules,
	},
};
