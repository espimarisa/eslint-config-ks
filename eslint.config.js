// eslint.config.js
import ks from "./src/index.mjs";

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
