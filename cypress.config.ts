const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

export default defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsBuildPlugin(config)],
        })
      );
      return config;
    }, env: {
      // allureReuseAfterSpec: true,
      // download_dir: "./cypress/downloads",
      snapshotOnly: true,
      // allure: true,
    },
    // allure: true,
    // allureResultsPath: "allure-results",
    // videosFolder: "allure-results/",
    // screenshotOnRunFailure: true,
  },
});
