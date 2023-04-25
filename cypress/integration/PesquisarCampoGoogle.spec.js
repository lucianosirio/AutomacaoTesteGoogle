/// <reference types = "cypress"/>

describe('Testar a Pesquisa do Google', () => {

    it('Acessar a URL do Google', () => {

        cy.AcessoGoogle();

    })

    it('Escrevendo no campo de Pesquisa do Google', () => {

        cy.EscrevaPesquisa();  

    })

})