// @ts-check
import eslintPluginTOML from "eslint-plugin-toml";

/** @type {import("eslint").Linter.RulesRecord} */

// @ts-expect-error This typing is slightly out of date
const tomlRules = {
	"toml/keys-order": "warn",
	"toml/no-non-decimal-integer": "warn",
	"toml/no-space-dots": "warn",
	"toml/padding-line-between-pairs": "warn",
	"toml/padding-line-between-tables": "warn",
	"toml/quoted-keys": "warn",
	"toml/tables-order": "warn",

	// Prettier cannot be used directly with TOML, disable it for .TOML files only
	"prettier/prettier": "off",

	// TOML rules, if prettier is enabled then we can *assume* the user is okay with opinionated formatting
	// Due to disabling prettier for TOML files, these are an OK replacement
	"toml/indent": ["warn", "tab", { subTables: 1 }],
	"toml/array-bracket-newline": ["warn", "consistent"],
	"toml/array-bracket-spacing": "warn",
	"toml/array-element-newline": ["warn", "consistent"],
	"toml/comma-style": "warn",
	"toml/inline-table-curly-spacing": "warn",
	"toml/key-spacing": ["warn", { align: "equal" }],
	"toml/spaced-comment": ["warn", "always", { markers: ["#"] }],
	"toml/table-bracket-spacing": "warn",

	...eslintPluginTOML.configs.recommended.rules,
};

export default tomlRules;
