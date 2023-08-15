# @fullscript/docusaurus-plugin-webpack

A docusaurus v2 plugin for extending/modifying the underlying webpack config. 

**NOTE: This is provided without support, use at your own risk.**

## Installation

`yarn add https://github.com/Fullscript/docusaurus-plugin-webpack#1.0.0`

## Usage

```js
// docusaurus.config.js

module.exports = {
  // ...
  plugins: [
    [
      "@fullscript/docusaurus-plugin-webpack",
      {
        // Configuration for webpack-merge
        mergeStrategy: { plugins: "append", resolve: "merge" },
        // Any valid webpack configuration
        resolve: {
          alias: {
            "@foobar": "some/path",
          },
        },
        plugins: [
          new MyWebpackPlugin(),
        ],
      },
    ],
  ],
};
```