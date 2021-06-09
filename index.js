/**
 * @file @sysdotini/eslint-config
 * @description My strict and opinionated ESLint config with built-in TypeScript, Prettier, and import styling support.
 * @author sysdotini <espi@riseup.net>
 * @license MIT
 */

/**
 * The main config
 * @type {Record<string, any>}
 */

module.exports = {
  root: true,

  /**
   * Environment options
   * @type {Record<string, boolean>}
   */

  env: {
    es6: true,
    amd: true,
    browser: true,
  },

  /**
   * ESLint parser options
   * @type {Record<string, any>}
   */

  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: { jsx: true },
  },

  /**
   * Plugins/estensions
   * @type {Array<string>}
   */

  extends: ["eslint:recommended", "plugin:import/recommended", "plugin:import/react", "prettier"],

  /**
   * Main stylistic rules
   * @type {Record<string, any>}
   */

  rules: {
    /**
     * These rules are all disabled due to Prettier handling it
     * @see https://github.com/prettier/eslint-config-prettier/blob/main/index.js
     */

    // Prettier handles these rules. Commented in case a rollback is needed
    /* "arrow-parens": ["warn", "always"],
    "block-spacing": ["warn", "always"],
    "brace-style": ["warn", "1tbs", { allowSingleLine: true }],
    "comma-dangle": ["warn", "always-multiline"],
    "comma-spacing": ["warn", { after: true, before: false }],
    "comma-style": ["warn", "last"],
    "computed-property-spacing": ["warn", "never"],
    "eol-last": "warn",
    "jsx-quotes": ["warn", "prefer-double"],
    "lines-around-comment": ["warn", { beforeBlockComment: false }],
    "new-parens": "warn",
    "no-mixed-spaces-and-tabs": "warn",
    "no-multiple-empty-lines": "warn",
    "no-spaced-func": "warn",
    "object-curly-spacing": ["warn", "always"],
    "no-trailing-spaces": "warn",
    "operator-linebreak": ["warn", "after"],
    "quote-props": ["warn", "consistent-as-needed"],
    "semi": ["warn", "always"],
    "semi-spacing": ["warn", { after: true, before: false }],
    "space-before-blocks": ["warn", "always"],
    "space-in-parens": ["warn", "never"],
    "space-infix-ops": ["warn", { int32Hint: true }], */

    "consistent-this": ["warn", "self"],
    "eqeqeq": ["warn", "smart"],
    "max-depth": ["warn", 8],
    "max-nested-callbacks": ["warn", 8],
    "no-array-constructor": "warn",
    "no-inline-comments": "warn",
    "no-lonely-if": "warn",
    "no-new-object": "warn",
    "no-return-await": "warn",
    "no-undef": "off",
    "no-unneeded-ternary": "warn",
    "no-var": "warn",
    "padded-blocks": ["warn", "never"],
    "prefer-const": ["error", { destructuring: "any", ignoreReadBeforeAssign: false }],
    "quotes": ["warn", "double", { avoidEscape: true, allowTemplateLiterals: false }],
    "spaced-comment": ["warn", "always"],

    // Plugin options
    "import/no-default-export": ["error"],
    "import/order": ["warn", { groups: ["type", "parent", "sibling", "internal", "external", "builtin", "index", "object"] }],
    "prettier/prettier": "warn",
  },

  /**
   * Typescript overrides
   * @type {Record<string, any>[]}
   */

  overrides: [
    {
      /**
       * Filetypes to check
       * @type {string[]}
       */

      files: ["*.ts", "*.tsx"],

      /**
       * The parser to use
       * @type {string}
       */

      parser: "@typescript-eslint/parser",

      /**
       * Parser options
       * @type {Record<string, any>}
       */

      parserOptions: {
        project: "./tsconfig.json",
      },

      /**
       * Plugins to use
       * @type {string[]}
       */

      plugins: ["@typescript-eslint", "prettier"],

      /**
       * Extensions to use
       * @type {string[]}
       */

      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/react",
        "plugin:import/typescript",
        "prettier",
      ],

      /**
       * Main TypeScript ESLint overrides
       * @type {Record<string, any>}
       */

      rules: {
        // Prettier handles these rules. Commented in case of a rollback needed
        // "@typescript-eslint/semi": ["warn", "always"],

        "no-undef": "off",
        "semi": "off",

        // Plugin options
        "@typescript-eslint/ban-ts-comment": "off",
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
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/naming-convention": [
          "warn",
          { format: ["camelCase"], selector: "default" },
          { format: ["camelCase"], selector: "variableLike" },
          { format: ["camelCase", "UPPER_CASE", "PascalCase"], selector: "variable" },
          { format: ["camelCase"], leadingUnderscore: "allow", selector: "parameter" },
          { format: ["camelCase"], selector: "memberLike" },
          { format: ["camelCase"], leadingUnderscore: "require", modifiers: ["private"], selector: "memberLike" },
          { format: null, selector: "typeLike" },
          { format: null, selector: "typeAlias" },
          { format: null, selector: "typeProperty" },
          { format: ["PascalCase"], prefix: ["T"], selector: "typeParameter" },
          { custom: { match: false, regex: "^I[A-Z]" }, format: ["PascalCase"], selector: "interface" },
          { format: null, selector: "objectLiteralProperty" },
          { format: ["UPPER_CASE"], selector: "enumMember" },
        ],
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/type-annotation-spacing": "error",
      },
    },
  ],
};
