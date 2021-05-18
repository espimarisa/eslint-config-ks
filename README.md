# @sysdotini/eslint-config

My strict and opinionated sharable ESLint config with built-in TypeScript and Prettier support.

## Highlights:

- **Very** strict code styling (double quotes, no inline comments, semicolons)
- Proper Prettier format support (disables bad options & lets Prettier do it's job)
- Proper TypeScript support (disables any breaking options & includes TS overrides)

# Installation

```sh
# If you only want JS support
npm i --save-dev eslint prettier typescript eslint-config-prettier eslint-plugin-prettier

# If you want both JS and TS support
npm i --save-dev eslint prettier typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier

# Main config
npm i --save-dev @sysdotini/eslint-config
```

# Usage

Once all of the modules are installed, you can add my config to your eslint config file. Additionally, you can expand upon it as you would any other config.

## .eslintrc/eslintrc.json

```JSON
{
  "extends": "@sysdotini/eslint-config",
  // Make sure you add ./dist if you're using TS!
  "ignorePatterns": ["./dist/", "./node_modules/"],
  "rules": {
    // Your custom rules
  },
}
```

## .eslintrc.js

```JS
module.exports = {
  extends: "@sysdotini/eslint-config",
  // Make sure you add ./dist if you're using TS!
  ignorePatterns: ["./dist/", "./node_modules/"],
  rules: {
    // Your custom rules
  },
};
```

## package.json

```JSON
"eslintConfig": {
  "extends": "@sysdotini/eslint-config",
  // Make sure you add ./dist if you're using TS!
  "ignorePatterns": ["./dist/", "./node_modules/"],
  "rules": {
    // Your custom rules
  },
}
```

# Ignoring

As ESLint doesn't use items in ignoredPatterns for sharable configs, you'll have to set this up yourself.

## .eslintignore

```sh
./node_modules/ # This *should* always be ignored but it's good to be sure
./dist/ # TypeScript output
```

## package.json

```JSON
// Add this key to your package.json
"eslintIgnore": ["./dist/", "./node_modules/"],
```

# License

[MIT][license]

[license]: LICENSE "The MIT License"
