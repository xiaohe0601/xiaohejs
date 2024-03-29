import { defineConfig } from "rollup";

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-ts";
import { terser } from "rollup-plugin-terser";

import path from "node:path";
import url from "node:url";
import * as glob from "glob";

export default [
  defineConfig({
    input: "src/index.ts",
    output: {
      format: "umd",
      name: "xiaohejs",
      dir: "lib/cjs",
      exports: "named"
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        transpiler: {
          typescriptSyntax: "typescript",
          otherSyntax: "babel"
        }
      }),
      terser()
    ]
  }),
  defineConfig({
    input: Object.fromEntries(
      glob.sync("src/**/*.ts").map((file) => [
        path.relative("src", file.slice(0, file.length - path.extname(file).length)),
        url.fileURLToPath(new URL(file, import.meta.url))
      ])
    ),
    output: {
      format: "es",
      dir: "lib/esm",
      exports: "named"
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        transpiler: {
          typescriptSyntax: "typescript",
          otherSyntax: "babel"
        }
      }),
      terser()
    ]
  })
];