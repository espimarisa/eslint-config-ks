// @ts-check

/** @type {import("eslint").Linter.RulesRecord} */
const typescriptRules = {
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
