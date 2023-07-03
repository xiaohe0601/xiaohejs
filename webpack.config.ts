import * as webpack from "webpack";
import * as path from "path";

import { merge } from "webpack-merge";

const CommonConfig: webpack.Configuration = {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.ts?$/,
      use: ["babel-loader"],
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: [".ts"]
  },
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    clean: true
  }
};

const CjsConfig = merge(CommonConfig, {
  output: {
    path: path.resolve(__dirname, "lib/cjs"),
    library: {
      name: "xiaohejs",
      type: "umd"
    }
  }
});

const EsmConfig = merge(CommonConfig, {
  output: {
    module: true,
    path: path.resolve(__dirname, "lib/esm"),
    library: {
      type: "module"
    }
  },
  experiments: {
    outputModule: true
  }
});

export default [CjsConfig, EsmConfig];