# @sysdotini/eslint-config

My strict and opinionated sharable ESLint config with built-in TypeScript and Prettier support.

## Highlights:

- **Very** strict code styling (double quotes, no inline comments, semicolons)
- Proper Prettier format support (disables bad options & lets Prettier do it's job)
- Proper TypeScript support (disables any breaking options & includes TS overrides)

# Installation

```sh
# required dependencies. be sure these are up to date!
npm i --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier

# the main config
npm i --save-dev @sysdotini/eslint-config
```

# Usage

Once all of the modules are installed, you can add my config to your eslint config file. Additionally, you can expand upon it as you would any other config.

## .eslintrc or eslintrc.json

```JSON
{
  "extends": "@sysdotini/eslint-config"
}
```

## .eslintrc.js

```JS
module.exports = {
  extends: "@sysdotini/eslint-config"
};
```

## package.json

```JSON
"eslintConfig": {
  "extends": "@sysdotini/eslint-config"
}
```

# License

[MIT][license]

[license]: LICENSE "The MIT License"
