// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

before(() => {
  cy.task("unzip:h5p", { timeout: 20000 }) // Extract .h5p for tests
    .task("copy:libraries", { timeout: 20000 }) // copy libraries
    .task("copy:content", { timeout: 20000 }) // copy content
    .task("copy:h5pjson", { timeout: 20000 }); // copy H5P.json file to content folder
});

after(() => {
  cy.task("clean"); //we need to clean up after ourselves
});
