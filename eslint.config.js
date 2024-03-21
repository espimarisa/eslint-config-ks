import eslintConfig from "./src/index.mjs";

export default eslintConfig(
  {
    prettier: true,

    json: true,

    yml: true,

    markdown: true,

    toml: true,

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
