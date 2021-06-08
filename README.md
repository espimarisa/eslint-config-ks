# @sysdotini/eslint-config

My strict and opinionated sharable ESLint config with built-in TypeScript and Prettier support.

## Highlights:

- **Very** strict code styling (double quotes, no inline comments, semicolons)
- Proper Prettier format support (disables bad options & lets Prettier do it's job)
- Proper TypeScript support (disables any breaking options & includes TS override

# Installation

```sh
# Replace npm with yarn and i with add
# Or, if you're based, use pnpm : )

# If you only want JS support
npm i -D eslint prettier typescript eslint-config-prettier eslint-plugin-prettier

# If you want both JS and TS support
npm i -D eslint prettier typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier

# Main config
npm i -D @sysdotini/eslint-config
```

# Usage

Once all of the modules are installed, you can add my config to your eslint config file. Additionally, you can expand upon it as you would any other config.

## package.json

Append these keys to your existing package.json. Remove the comments.

```JSON
"eslintConfig": {
  "extends": "@sysdotini/eslint-config",
  // Your custom rules
  "rules": {}
},

// Ignore patterns following eslintIgnore spec
// You can omit this and use .eslintignore if you really want to.
"eslintIgnore": ["dist", "node_modules"]
```

## .eslintrc/eslintrc.json

Make a .eslintrc and put this in it. The .json is optional.

```JSON
{
  "extends": "@sysdotini/eslint-config",
  // Your custom rules
  "rules": {}
}
```

## .eslintrc.js

Make a .eslintrc.js file and put this in it.

```JS
module.exports = {
  extends: "@sysdotini/eslint-config",
  // Your custom rules
  rules: {},
};
```

# Ignoring

As ESLint doesn't use items in ignoredPatterns for sharable configs, you'll have to set this up yourself (if you are using .eslintrc or .eslintrc.js - for package.json, see above.)

## .eslintignore

```sh
# https://eslint.org/docs/user-guide/configuring/ignoring-code
node_modules # This *should* always be ignored but it's good to be sure
dist # TypeScript output
# anything else you want to ignore
```

# License

[MIT][license]

[license]: LICENSE "The MIT License"
