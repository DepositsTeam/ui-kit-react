import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import css from "rollup-plugin-import-css"
import svg from "rollup-plugin-svg-import"
import resolve from "@rollup/plugin-node-resolve"
import external from "rollup-plugin-peer-deps-external";
import {terser} from "rollup-plugin-terser"

import packageJSON from "./package.json";
const input = "./src/index.js";

export default [
    // CommonJS
    {
        input,
        output: {
            file: packageJSON.main,
            format: "cjs"
        },
        plugins: [
            babel({
                exclude: "node_modules/**"
            }),
            external(),
            resolve(),
            commonjs(),
            css({
                output: "index.css"
            }),
            svg(),
        ]
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
                'react-dom': "ReactDOM"
            }
        },
        plugins: [
            babel({
                exclude: "node_modules/**"
            }),
            external(),
            resolve(),
            commonjs(),
            css({
                output: "index.css"
            }),
            svg(),
        ]
    },
    // ES
    {
        input,
        output: {
            file: packageJSON.module,
            format: "es",
            exports: "named"
        },
        plugins: [
            babel({
                exclude: "node_modules/**"
            }),
            external(),
            resolve(),
            commonjs(),
            css({
                output: "index.css"
            }),
            svg(),
            terser(),
        ]
    }
];