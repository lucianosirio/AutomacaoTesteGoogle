const elementos = require('./Elementos').ELEMENTS

import { faker } from '@faker-js/faker';
const randonCity = faker.address.city() //criando constantes

class ClassGoogle {

    acessoGoogle(){

        cy.intercept('POST','https://play.google.com/log?format=json&hasfast=true').as('EsperaElemento')
        cy.visit('/', { timeout: 10000 })
        .should('be.exist').wait('@EsperaElemento')

        cy.get(elementos.btPesquisar, {timeout: 10000})
        .should('be.visible')

        cy.get(elementos.btSorte, {timeout: 10000})
        .should('be.visible')

        cy.wait(1000)

    }

    escrevaPesquisa(){

        cy.get('#APjFqb')
        .type(randonCity)

        cy.get('#APjFqb')
        .should('have.value', 'Cypress')

        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b')
        .click()

    }
}

export default new ClassGoogle(); // esse comando é para utilizar a classe em outros arquivos.