# [eslint-config-ks][package]

A strict and customizable "kitchen sink" ESLint config featuring support for ESM, TypeScript, JSON, React, and more.

eslint-config-ks is a "kitchen sink" ESLint config designed to be easily configurable and deployable regardless of the type of project you are working on.

eslint-config-ks deploys strict but sane rules for ESM, TypeScript, React, Svelte, JSON, Markdown, TOML, and YAML currently.

## Install

```sh
# be sure you are installing the latest version of ESLint!
# pnpm, replace with your package manager of choice
# if you are using react or svelte, don't miss the below documentation!
pnpm add -D eslint eslint-config-ks

# bun
bun add -D eslint eslint-config-ks
```

## Setup

As of ESLint v8.23.0, ESLint uses a new flat configuration file. This config is only compatible with that standard, so be sure you install the latest version of ESLint.

```js
// eslint.config.js at the root of your project
// if you are not using ESM with "type": "module" in your package.json
// replace import with require and export default with module.exports = ks();
import ks from "eslint-config-ks";

export default ks();
```

## Options

eslint-config-ks is designed to be plug-and-play for most forms of projects, and operates on an "opt in" design. By default, it only enables support for JavaScript and TypeScript linting. You can easily enable support for additional languages and libraries by configuring it, however.

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
  },
  [
    {
      files: ["**/*.tsx"],
      rules: {
        example: "off",
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
    "source.fixAll.eslint": "explicit",
  },

  // Validate supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "svelte"
  ]
}
```

## License

[zlib/libpng][license]

[package]: https://www.npmjs.com/package/eslint-config-ks "A link to eslint-config-ks on npmjs."
[license]: LICENSE.md "A link to the zlib/libpng license."
