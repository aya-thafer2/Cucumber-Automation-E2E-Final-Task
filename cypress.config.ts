const { defineConfig } = require("cypress");

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on: any,config: any){
      require('cypress-mochawesome-reporter/plugin')(on);
      return require("./cypress/plugins")(on, config);
    },
  },
});
