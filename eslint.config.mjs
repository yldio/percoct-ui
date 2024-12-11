import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  { ignores: ["eslint.config.mjs", "storybook-static", ".storybook"] },
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },
);
