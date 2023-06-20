import { nodeResolve } from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import swc from "@rollup/plugin-swc";
import { defineConfig } from "rollup";
import terser from "@rollup/plugin-terser";

export default defineConfig({
  input: "src/main.ts",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    nodeResolve({
      preferBuiltins: true,
      extensions: [".mjs", ".js", ".json", ".node", ".ts"],
    }),
    json(),
    commonjs(),
    swc(),
    // terser(),
  ],
});
