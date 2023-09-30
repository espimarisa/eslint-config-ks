/* eslint-disable unicorn/no-null */

/** @type {import("eslint").Linter.Config} */

module.exports = {
  extends: ["./index.cjs"],

  // TypeScript support
  overrides: [
    {
      parserOptions: {
        project: ["tsconfig.json"],
        sourceType: "module",
      },

      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",

      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },

        "import/resolver": {
          typescript: { alwaysTryTypes: true },
        },
      },

      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:import/typescript",
      ],
      rules: {
        // This is just too much... sorry <3
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-vars": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",

        "@typescript-eslint/no-unused-vars": "error",
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

        // Naming convention
        "@typescript-eslint/naming-convention": [
          "warn",
          {
            selector: "default",
            format: ["camelCase"],
          },
          {
            selector: "variableLike",
            format: ["camelCase"],
          },
          {
            selector: "variable",
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
          },
          {
            selector: "parameter",
            format: ["camelCase"],
            leadingUnderscore: "allow",
          },
          {
            selector: "memberLike",
            format: ["camelCase"],
          },
          {
            selector: "memberLike",
            modifiers: ["private"],
            format: ["camelCase"],
            leadingUnderscore: "require",
          },
          {
            selector: "typeParameter",
            format: ["PascalCase"],
            prefix: ["T"],
          },
          {
            selector: "interface",
            format: ["PascalCase"],
            custom: { regex: "^I[A-Z]", match: false },
          },
          {
            selector: "enumMember",
            format: ["UPPER_CASE"],
          },
          {
            selector: "objectLiteralProperty",
            format: null,
          },
          {
            selector: "typeLike",
            format: null,
          },
          {
            selector: "typeAlias",
            format: null,
          },
          {
            selector: "typeProperty",
            format: null,
          },
        ],
      },
    },
  ],
};
