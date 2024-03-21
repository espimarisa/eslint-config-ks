// @ts-check

// @ts-expect-error This plugin has no typings
import eslintPluginNode from "eslint-plugin-n";

/** @type {import("eslint").Linter.RulesRecord} */
const nodeRules = {
  ...eslintPluginNode.configs["flat/recommended"].rules,
};

export default nodeRules;
