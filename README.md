# @espimarisa/eslint-config

My opinionated ESLint config to perform strict type-checking and to enforce best practices in both ESM and TypeScript.

> This is a very strict config that I primarily use for my own projects. If you are not advanced with TypeScript especially, you will likely want to configure a lot of your own rules or look elsewhere. YMMV!

## Highlights

- Opinionated default import order
- Native prettier support configurable by your .prettierrc
- Native TypeScript support with the strictest type-checking rules enabled

## Installation

```sh
# To only enable JS support & checking
pnpm add -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-plugin-unicorn eslint-plugin-n

# If you're a TypeScript user, also add these
pnpm add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript

# Install the main config last
pnpm add -D @espimarisa/eslint-config
```

## Setup


```JS
// .eslintrc.cjs
module.exports = {
  extends: "@espimarisa/eslint-config",
  // Custom rules
  rules: {},
};
```

## TypeScript Monorepos

If you are using a monorepo or your tsconfig is not at `root/tsconfig.json`, you will need to override parserOptions.project for TypeScript functionality to work properly.

```JS
module.exports = {
  extends: "@espimarisa/eslint-config",
  overrides: [
    {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
};
```

## Ignoring

As ESLint doesn't use items in ignoredPatterns for sharable configs, you'll have to set this up yourself, and per-package if you're working with a monorepo.

### `.eslintignore`

```sh
# https://eslint.org/docs/user-guide/configuring/ignoring-code
node_modules # This should always be ignored by default
dist # TypeScript default output directory
# anything else you want to ignore
```

## License

[MIT][license]

[license]: LICENSE "A link to the project license."
