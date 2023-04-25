// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


const elementos = require('./Elementos').ELEMENTS

Cypress.Commands.add('AcessoGoogle', () => {

    cy.visit('/', { timeout: 10000 })
        .should('be.exist')

    cy.get(elementos.btPesquisar, {timeout: 10000})
        .should('be.visible')

    cy.get(elementos.btSorte, {timeout: 10000})
        .should('be.visible')

    cy.wait(1000)
})

Cypress.Commands.add('EscrevaPesquisa', () => {

    cy.get('textarea[class="gLFyf"]')
        .should('be.visible')

    cy.get('textarea[class="gLFyf"]')
        .type('Cypress').realPress('Enter')

    /*cy.get('.aajZCb > .lJ9FBc > center > .gNO89b')
        .click()*/
})
