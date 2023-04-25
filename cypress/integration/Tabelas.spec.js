describe('Testar tabelas do Site W3Schools', () => {

    it('Acessar a Url do Site W3Schools', ()=>{
        cy.visit('/')
    })
  
    it('Encontrar o Tables de Html', () => {
        cy.get('a[class="w3-button tut-button"]')
            .contains('Learn HTML').should('be.visible').click() //comando contains afirma o elemento desejado

        cy.get('div[id="leftmenuinnerinner"]').find('h2[class="left"]').eq(0)

        cy.get('a[href="html_tables.asp"]').eq(0)
            .should('have.text','HTML Tables').click()
    })

    it('Encontrar tabela e validar valores', () => {

        //Testando primeira coluna

        cy.get('table[class="ws-table-all"]').find('th').eq(0)
            .contains('Company')
        cy.get('table[class="ws-table-all"]').find('td').eq(0)
            .contains('Alfreds Futterkiste').should('have.text','Alfreds Futterkiste')

        //Testando segunda coluna

        cy.get('table[class="ws-table-all"]').find('th').eq(1)
            .contains('Contact')
        cy.get('table[class="ws-table-all")').find('td').eq(1)
            .contains('Maria Anders').should('have.text','Maria Anders')

        //Testanto terceira coluna

        cy.get('table[class="ws-table-all"]').find('th').eq(2)
            .contains('Country')
        cy.get('table[class="ws-table-all"]').find('td').eq(2)
            .contains('Germany').should('have.text','Germany')
    })



})