const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig(
  process.env.NODE_ENV === "production"
    ? {
        transpileDependencies: true,
        publicPath: "https://www.wynton-japan.nl",
        assetsDir: "assets",
        outputDir: "dist",
      }
    : {
        transpileDependencies: true,
      }
);
