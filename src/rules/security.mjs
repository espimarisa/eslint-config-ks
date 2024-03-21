// @ts-check

// @ts-expect-error This plugin has no typings
import eslintPluginSecurity from "eslint-plugin-security";

/** @type {import("eslint").Linter.RulesRecord} */
const securityRules = {
  ...eslintPluginSecurity.configs.recommended.rules,
};

export default securityRules;
