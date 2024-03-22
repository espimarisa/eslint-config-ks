# [eslint-config-ks][package]

eslint-config-ks is a strict and customizable "kitchen sink" ESLint config library featuring support for ESM, TypeScript, React, Svelte, Astro, Vue, and more. It is designed to be easily configurable and deployable to most types of projects with little effort to get working.

Currently, eslint-config-ks supports ESM, TypeScript, React, Svelte, Astro, Vue, JSON, Markdown, TOML, and YAML.

## Install

```sh
# be sure you are installing the latest version of ESLint!
# pnpm, replace with your package manager of choice
# if you are using react, svelte, astro, or vue, read below!
pnpm add -D eslint eslint-config-ks

# bun
bun add -D eslint eslint-config-ks
```

## Setup

As of ESLint v8.23.0, ESLint uses a new flat configuration file. This config is only compatible with that standard, so be sure you install the latest version of ESLint.

```js
// eslint.config.js
import ks from "eslint-config-ks";

export default ks();
```

```js
// eslint.config.js but CommonJS
// Note that this is made for ESM only and may break in CJS. YMMV

// eslint-disable-next-line unicorn/prefer-module, n/no-missing-require
const ks = require("eslint-config-ks");

// eslint-disable-next-line unicorn/prefer-module
module.exports = ks();
```

## Options

By default, eslint-plugin-ks only enables support for JavaScript and TypeScript linting. You can easily enable support for additional languages and libraries by configuring it, as eslint-plugin-ks operates on an "opt in" design. Some supported libraries/languages require the installation of additional dependencies. More information is provided below.

```js
// eslint.config.js
import ks from "eslint-config-ks";

export default ks({
  // An array of paths to ignore. Defaults to ignoring node_modules and dist.
  ignores: ["**/node_modules/*", "**/dist/*"],

  // Enables Prettier support and ties to the linter. Defaults to false. You need to provide your own .prettierrc.
  prettier: false,

  // Toggles TypeScript support. Defaults to true.
  typescript: true,

  // A path pointing to a tsconfig file for TypeScript support. Defaults to true to enable default behavior.
  project: ["tsconfig.json"],

  // Enables React support. Requires eslint-plugin-react, eslint-plugin-react-hooks, and eslint-plugin-jsx-a11y to be installed. Defaults to false.
  react: false,

  // Enables Svelte support. Requires eslint-plugin-svelte, svelte-eslint-parser, and svelte to be installed. Defaults to false.
  svelte: false,

  // Enables Astro support. Requires eslint-plugin-astro, eslint-plugin-jsx-a11y, and astro-eslint-parser to be installed. Defaults to false.
  astro: false,

  // Enables Vue support. Requires eslint-plugin-vue and vue-eslint-parser to be installed. Defaults to false.
  vue: false,

  // Enables linting JSON, JSONC, and JSON5 files. Defaults to false.
  json: false,

  // Enables linting code snippets inside of Markdown/MD files. Defaults to false.
  markdown: false,

  // Enables linting TOML files. Defaults to false.
  toml: false,

  // Enables linting YAML/YML files. Defaults to false.
  yml: false,
});
```

## Prettier Support

You can enable prettier support by setting `prettier` to `true`. You will need to supply your own `.prettierrc`, and for Svelte, Svelte, and TOML, setup prettier plugins to function with them. You can then override the prettier rule, as this config disables it to prevent parsing errors.

```js
// eslint.config.js
import ks from "eslint-config-ks";

export default ks(
  {
    prettier: true,
  },
  [
    {
      // Example: Enabling Svelte prettier support
      // Be sure you install prettier-plugin-svelte,
      // and that you configure it in your .prettierc.
      // https://github.com/sveltejs/prettier-plugin-svelte
      files: ["**/*.svelte"],
      rules: {
        "prettier/prettier": "warn",
      },
    },
  ],
);
```

## React Support

`eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-jsx-a11y` must be installed to enable React support. You will also need `react` and `@types/react` if you are using TSX.

```sh
bun add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
pnpm add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y

# if you don't have react installed yet, be sure to install it
bun add react
pnpm add react

# if you are going to use tsx, don't forget the types!
bun add -D @types/react
pnpm add -D @types/react
```

```js
// eslint.config.js
import ks from "eslint-config-ks";

export default ks({
  react: true,
  // Enable if you want to typecheck
  // typescript: true
});
```

## Svelte Support

`eslint-plugin-svelte`, `svelte-eslint-parser`, and `svelte` must be installed to enable Svelte support.

```sh
bun add -D eslint-plugin-svelte@2.36.0-next.12 svelte-eslint-parser@v0.34.0-next.12 svelte
pnpm add -D eslint-plugin-svelte@2.36.0-next.12 svelte-eslint-parser@v0.34.0-next.12 svelte
```

```js
// eslint.config.js
import ks from "eslint-config-ks";

export default ks({
  svelte: true,
  // Enable if you want to typecheck
  // typescript: true,
});
```

## Astro Support

`eslint-plugin-astro`, `eslint-plugin-jsx-a11y`, and `astro-eslint-parser` must be installed to enable Astro support.

```sh
bun add -D eslint-plugin-astro eslint-plugin-jsx-a11y astro-eslint-parser
pnpm add -D eslint-plugin-astro eslint-plugin-jsx-a11y astro-eslint-parser
```

```js
// eslint.config.js
import ks from "eslint-config-ks";

export default ks({
  astro: true,
  // Enable if you want to typecheck
  // typescript: true,
});
```

## Vue Support

`eslint-plugin-vue` and `vue-eslint-parser` must be installed to enable Vue support.

```sh
bun add -D eslint-plugin-vue eslint-plugin-vue-eslint-parser
pnpm add -D eslint-plugin-vue eslint-plugin-vue-eslint-parser
```

```js
// eslint.config.js
import ks from "eslint-config-ks";

export default ks({
  vue: true,
  // Enable if you want to typecheck
  // typescript: true,
});
```

## Extending

Additionally, you can pass an array of flat ESLint configs if you need to extend the existing config for something that is not supported. These configs are loaded last, and may override existing rules in eslint-config-ks.

```js
// eslint.config.js
import ks from "eslint-config-ks";

export default ks(
  {
    // Additional options go here, if left blank the defaults are loaded
    // See above for all options
  },
  [
    {
      files: ["**/*.{jsx,tsx}"],
      rules: {
        exampleRule: "off",
      },
      // ....so on, and so forth
    },
  ],
);
```

## VSCode Support

You may need to add the following options to `.vscode/settings.json` or your VSCode settings.

```JSON
{
  // Enables flat config support
  "eslint.experimental.useFlatConfig": true,

  // Set this to true to format on save
  // "editor.formatOnSave": true,

  // Auto fix support
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },

  // Validate supported languages
  "eslint.validate": [
    "astro",
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "markdown",
    "json",
    "jsonc",
    "svelte",
    "toml",
    "vue",
    "yaml"
  ]
}
```

## License

[zlib/libpng][license]

[package]: https://www.npmjs.com/package/eslint-config-ks "A link to eslint-config-ks on npmjs."
[license]: LICENSE.md "A link to the zlib/libpng license."
