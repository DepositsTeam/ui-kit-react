import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import scss from "rollup-plugin-scss";
import svg from "rollup-plugin-svg-import";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";
import packageJSON from "./package.json";

const input = "./src/index.js";

export default [
  // CommonJS
  {
    input,
    output: {
      file: packageJSON.main,
      format: "cjs",
    },
    external: ["react", "react-dom"],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/env", "@babel/preset-react"],
      }),
      json(),
      commonjs(),
      babel({
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      scss(),
      svg(),
      // terser(),
    ],
  },
  //UMD
  {
    input,
    output: {
      file: packageJSON.browser,
      format: "umd",
      name: "uiKitReact",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
    external: ["react", "react-dom"],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/env", "@babel/preset-react"],
      }),
      json(),
      commonjs(),
      babel({
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      scss(),
      svg(),
      // terser(),
    ],
  },
  // ES
  {
    input,
    output: {
      file: packageJSON.module,
      format: "es",
      exports: "named",
    },
    external: ["react", "react-dom"],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/env", "@babel/preset-react"],
      }),
      json(),
      commonjs(),
      babel({
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      scss(),
      svg(),
      // terser(),
    ],
  },
];
