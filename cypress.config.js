const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const webpack = require("@cypress/webpack-preprocessor");

async function setupNodeEvents(cypressOn, config) {
  // implement node event listeners here
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  const on = require("cypress-on-fix")(cypressOn);
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    }),    
    webpack({
        webpackOptions: {
          resolve: {
            extensions: [".ts", ".js"],
          },
          module: {
            rules: [
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                    options: config,
                  },
                ],
              },
            ],
          },
        },
      })
  );
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  screenshotsFolder: "cypress/reports/screenshots",
  videosFolder: "cypress/reports/videos",
  chromeWebSecurity: false,
  video: false,
  e2e: {
    baseUrl: "https://advantageonlineshopping.com/#/",
    specPattern: "**/*.feature",
    setupNodeEvents,
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    experimentalInteractiveRunEvents: true,
    experimentalRunAllSpecs: true,
  },
});