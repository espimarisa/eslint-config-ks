// @ts-check

// @ts-expect-error This library has no typings
import eslintPluginUnicorn from "eslint-plugin-unicorn";

/** @type {import("eslint").Linter.RulesRecord} */
const unicornRules = {
  ...eslintPluginUnicorn.configs["flat/recommended"].rules,
};

export default unicornRules;
