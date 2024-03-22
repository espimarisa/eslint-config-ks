// @ts-check

import baseRules from "./base.mjs";
import importRules from "./import.mjs";
import nodeRules from "./node.mjs";
import promiseRules from "./promise.mjs";
import securityRules from "./security.mjs";
import unicornRules from "./unicorn.mjs";

/** @type {import("eslint").Linter.RulesRecord} */
const extendedBaseRules = {
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
};

export default extendedBaseRules;
