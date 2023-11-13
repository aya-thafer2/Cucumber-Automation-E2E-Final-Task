const { defineConfig } = require("cypress");

export default defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on: any,config: any){
      return require("./cypress/plugins")(on, config);
    },
  },
});
