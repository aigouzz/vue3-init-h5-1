const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  outputDir: "../aigouzz.github.io/m_shop",
  publicPath: "/m_shop",
  transpileDependencies: true,
  chainWebpack(config) {
    config.resolve.alias.set("@", path.resolve(__dirname, "./src"));
    return config;
  },
});
