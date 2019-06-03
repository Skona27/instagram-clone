import resolve from "rollup-plugin-node-resolve";
import filesize from "rollup-plugin-filesize";
import sourceMaps from "rollup-plugin-sourcemaps";
import pkg from "./package.json";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";
import path from "path";

const input = path.resolve(__dirname, "compiled/index.jsx");

const plugins = [
  babel(),
  resolve({
    extensions: [".js", ".jsx", ".json"]
  }),
  commonjs(),
  cleanup(),
  sourceMaps(),
  filesize()
];

export default [
  {
    input,
    external: Object.keys(pkg.dependencies),
    output: [
      {
        file: pkg.main,
        format: "es",
        sourcemap: true
      }
    ],
    plugins
  }
];
