const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const webpack = require("@cypress/webpack-preprocessor");
const cucumberJunit = require("./cypress/utils/gerar_junit.js");
const fs = require("fs");
const tasks = require("./cypress/support/tasks");

async function setupNodeEvents(cypressOn, config) {
  // implement node event listeners here
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  const on = require("cypress-on-fix")(cypressOn);
  tasks(on); // Para Gerar PDF
  await addCucumberPreprocessorPlugin(on, config);
 
  // Configurar Screenshots para Geração de PDF //
  on("after:screenshot", (details) => {
    console.log(details) // print all details to terminal
    const chars = details.path.split("\\");
    let last = chars[chars.length - 1];
    const newPath = `cypress/reports/screenshots/${last}`;
  
    return new Promise((resolve, reject) => {
      fs.rename(details.path, newPath, (err) => {
        if (err) return reject(err);
        resolve({ path: newPath });
      });
    });
  });
  
  // Gerar cucumber_report.xml //
  on("after:run", async results => {
    if (results) {
      console.log(results.totalPassed, "out of", results.totalTests, "passed");
      const junitOptions = {
        // Definição das opções necessárias
        strict: true,
        verbose: true,
      }
      const arquivoJson = require("./cypress/reports/cucumber-reports/cucumber-report.json");
      cucumberJunit(arquivoJson, junitOptions);
    }
  });

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
    baseUrl: "https://www.bradescoseguros.com.br/clientes",
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