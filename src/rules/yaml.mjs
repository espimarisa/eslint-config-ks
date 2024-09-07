// @ts-check
import ymlPlugin from "eslint-plugin-yml";

/** @type {import("eslint").Linter.RulesRecord} */

// @ts-expect-error This typing is not up to date
const yamlRules = {
	...ymlPlugin.configs.recommended.rules,
};

export default yamlRules;
