/// <reference types = "cypress"/>

import ClassGoogle from '../support/GoogleDesenv';

describe('Testar a Pesquisa do Google', () => {

    it.only('Acessar a URL do Google', () => {

        //cy.AcessoGoogle();
        
        /*cy.visit('/', { timeout: 10000 })
        .should('be.exist')

        cy.get(elementos.btPesquisar, {timeout: 10000})
        .should('be.visible')

        cy.get(elementos.btSorte, {timeout: 10000})
        .should('be.visible')

        cy.wait(1000)*/

        ClassGoogle.acessoGoogle()

    })

    it('Escrevendo no campo de Pesquisa do Google', () => {

        //cy.EscrevaPesquisa();  

        ClassGoogle.escrevaPesquisa()

    })

})