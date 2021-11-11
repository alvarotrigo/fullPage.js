import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

const terserOptions = {
    compress: {
        passes: 2
    }
};

module.exports = [
    {
        input: "src/js/app.js",
        external: [
            'fullpage',
            'fullpage_api',
        ],
        output: [
            {
                file: "build/fullpage.js",
                name: "fullpage",
                format: "umd"
            },
            {
                file: "build/fullpage.min.js",
                name: "fullpage",
                format: "umd",
                plugins: [terser(terserOptions)]
            }
        ],
        plugins: [
            resolve(),
            babel({
                babelHelpers: "bundled",
                exclude: "node_modules/**"
            })
        ]
    }
];
