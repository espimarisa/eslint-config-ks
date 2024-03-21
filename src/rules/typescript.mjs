// @ts-check

import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.RulesRecord} */
const typescriptRules = {
  // Enables strict type checking rules
  ...tseslint.configs.base.rules,
  ...tseslint.configs.eslintRecommended.rules,

  // @ts-expect-error This type seems to be out of date
  ...tseslint.configs.strictTypeChecked.rules,

  // TypeScript rules that are a bit too annoying for my liking
  "@typescript-eslint/no-unsafe-argument": "off",
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-call": "off",
  "@typescript-eslint/no-unsafe-member-access": "off",

  // TypeScript compilation already ensures that named imports exist in the referenced module
  "import-x/named": "off",

  // Prefer JavaLike accessibility indicators
  "@typescript-eslint/explicit-member-accessibility": [
    "error",
    {
      accessibility: "no-public",
      overrides: {
        accessors: "explicit",
        methods: "explicit",
      },
    },
  ],
};

export default typescriptRules;
