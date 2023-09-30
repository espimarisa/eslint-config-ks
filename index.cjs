/* eslint-disable unicorn/no-null */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,

  env: {
    es2023: true,
    amd: true,
    browser: true,
  },

  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2023,
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ["promise", "unicorn", "import", "prettier"],

  extends: [
    "eslint:recommended",
    "plugin:promise/recommended",
    "plugin:security/recommended",
    "plugin:import/recommended",
    "plugin:import/react",
    "plugin:n/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],

  rules: {
    // Force best practices
    "consistent-this": ["warn", "self"],
    "eqeqeq": ["warn", "smart"],
    "no-lonely-if": "warn",
    "no-unneeded-ternary": "warn",
    "no-var": "error",

    // QOL stuff
    "max-depth": ["warn", 8],
    "max-nested-callbacks": ["warn", 8],

    // Never use Array or Object
    "no-new-object": "warn",
    "no-array-constructor": "warn",

    // Cleans up comments
    "no-inline-comments": "warn",
    "spaced-comment": ["warn", "always"],

    // Force the use of const when not redefined
    "prefer-const": ["error", { destructuring: "any", ignoreReadBeforeAssign: false }],

    // Enables prettier
    "prettier/prettier": "warn",

    // Causes breakage with paths
    "n/no-missing-import": ["off"],
    "n/no-unpublished-import": ["off"],
    "import/no-unresolved": ["off"],

    // This setting is inconsistent
    "unicorn/filename-case": ["off"],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/prefer-module": "off",
    "security/detect-non-literal-fs-filename": "off",

    // Import order
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: ["type", "internal", "parent", "sibling", "external", "builtin", "index", "object"],
      },
    ],
  },
};
