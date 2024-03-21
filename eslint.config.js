import eslintConfig from "./src/index.mjs";

export default eslintConfig(
  {
    prettier: true,

    json: true,

    yml: true,

    markdown: true,
    typescript: true,
    toml: true,

    svelte: true,
    react: false,
  },
  [
    {
      rules: {
        "n/no-missing-import": "off",
      },
    },
  ],
);
