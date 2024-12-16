import typescript from "@rollup/plugin-typescript";

import packageJson from "./package.json" with { type: "json" };

export default [
  {
    input: "./src/index.ts",
    output: [
      { file: packageJson.main, format: "cjs", sourcemap: true },
      { file: packageJson.module, format: "esm", sourcemap: true },
    ],
    plugins: [typescript()],
  },
];
