import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Given('I open OrangeHRM website', () => {
  cy.visit('/');
});

When('I type {string} for Username', (username: string) => {
  cy.get('[placeholder="Username"]').type(username);
});

When('I type {string} for Password', (password: string) => {
  cy.get('[placeholder="Password"]').type(password);
});
When('I click login button', () => {
  cy.get('button').click();
});

Then('I should be directed to the Dashboard page', () => {
  cy.contains('.oxd-topbar-header-title', "Dashboard").should("exist");
});
