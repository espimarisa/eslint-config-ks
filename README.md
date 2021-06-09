# @sysdotini/eslint-config

My strict and opinionated sharable ESLint config with built-in TypeScript and Prettier support.

## Highlights:

- **Very** strict code styling (double quotes, no inline comments, semicolons)
- Proper Prettier format support (disables bad options & lets Prettier do it's job)
- Proper TypeScript support (disables any breaking options & includes TS override
- A sane default import/export order specification

# Installation

## Replace pnpm with your package manager of choice if you don't use pnpm.

- If you're using an ancient version of npm, ~~update~~, use `npm i` instead.

```sh
# To only enable JS support & checking
pnpm add -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-import

# Enables TypeScript support & checking
pnpm add -D typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-import

# Adds the main config
pnpm add -D @sysdotini/eslint-config
```

# Usage

Once all of the modules are installed, you can add my config to your eslint config file. Additionally, you can expand upon it as you would any other config.

## `.eslintrc/eslintrc.json`

Create an .eslintrc file and put the following into it. The file extension is optional.

```JSON
{
  "extends": "@sysdotini/eslint-config",
  // Your custom rules
  "rules": {}
}
```

## `.eslintrc.js`

Create an .eslintrc.js file and put the following into it.

```JS
module.exports = {
  extends: "@sysdotini/eslint-config",
  // Your custom rules
  rules: {},
};
```

## `package.json`

Append these keys to your existing package.json. Remove the comments.

```JSON
"eslintConfig": {
  "extends": "@sysdotini/eslint-config",
  // Your custom rules
  "rules": {}
},

// Ignore patterns following eslintIgnore spec
// You can omit this and use .eslintignore if you want
"eslintIgnore": ["dist", "node_modules"]
```

## Project Parser Option

If you are extending the config and a rule requires "project" to be set and you aren't using a tsconfig file at the root of the project, you will need to override parserOptions.project.

```JSON
{
  "extends": "@sysdotini/eslint-config",
  "parserOptions": {
    "project": "./path/to/tsconfig.file.json"
  }
}
```

# Ignoring

As ESLint doesn't use items in ignoredPatterns for sharable configs, you'll have to set this up yourself (if you are using .eslintrc or .eslintrc.js - for package.json, see above.)

## `.eslintignore`

```sh
# https://eslint.org/docs/user-guide/configuring/ignoring-code
node_modules # This should always be ignored by default
dist # TypeScript default output directory
# anything else you want to ignore
```

# License

[MIT][license]

[license]: LICENSE "The MIT License"
