// @ts-check

import tseslint from "typescript-eslint";

import baseConfig from "./configs/base.mjs";
import { javascriptConfig } from "./configs/javascript.mjs";
import { jsonConfig } from "./configs/json.mjs";
import { markdownConfig } from "./configs/markdown.mjs";
import { prettierConfig } from "./configs/prettier.mjs";
import { reactConfig } from "./configs/react.mjs";
import { tomlConfig } from "./configs/toml.mjs";
import { typescriptConfig } from "./configs/typescript.mjs";
import { ymlConfig } from "./configs/yaml.mjs";

/**
 * @typedef ConfigOptions Configuration options. If no options are provided, only JS/TS support is enabled.
 * @property {string[] | undefined} ignores An array of paths to ignore. Defaults to ignoring node_modules and dist.
 * @property {string[] | boolean | undefined} project A path pointing to a tsconfig or a boolean enabling default behaviour.
 * @property {boolean | undefined} prettier Enables Prettier support and ties it to the linter. Defaults to false. You need to provide your own .prettierrc.
 * @property {boolean | undefined} react Enables React support. Requires eslint-plugin-react, eslint-plugin-react-hooks, and eslint-plugin-jsx-a11y to be installed. Defaults to false.
 * @property {boolean | undefined} json Enables linting JSON, JSONC, and JSON5 files. Defaults to false.
 * @property {boolean | undefined} markdown Enables linting code snippets inside of Markdown/MD files. Defaults to false.
 * @property {boolean | undefined} toml Enables linting TOML files. Defaults to false.
 * @property {boolean | undefined} yml Enables linting YAML/YML files. Defaults to false.
 */

/**
 * Generates an ESLint config
 * @param {ConfigOptions} options An object of config options
 * @param {import("eslint").Linter.FlatConfig[]} configs An array of flat ESLint configs to append to the existing config
 */

export default (options, configs) => {
  const config = tseslint.config(
    {
      // Files and paths to ignores, overriden by options.ignoresPath
      ignores: options?.ignores || ["**/node_modules/*", "**/dist/*"],
    },

    // Base config for both ESM and TS
    { ...baseConfig },

    // JS only options
    { ...javascriptConfig },

    // TS only options
    { ...typescriptConfig(options?.project) },

    // React options
    options?.react ? { ...reactConfig } : {},

    options?.markdown ? { ...markdownConfig } : {},
    options?.json ? { ...jsonConfig } : {},
    options?.yml ? { ...ymlConfig } : {},

    // Load prettier as late as possible
    options?.prettier ? { ...prettierConfig } : {},

    // TOML breaks with prettier so load it 2nd to last
    options?.toml ? { ...tomlConfig } : {},

    // Allows custom config overrides, load last
    ...(configs ?? []),
  );

  return config;
};
