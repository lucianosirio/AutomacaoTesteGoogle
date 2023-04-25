describe('Teste de campos no W3Schools', ()=>{

    context('Testar Campos Fields', () => {

        it('Acessar a Url do Site W3Schools', ()=>{
            cy.visit('/')
        })
      
        it('Encontrar o forms de Html', () => {
            cy.get('a[class="w3-button tut-button"]')
                .contains('Learn HTML').should('be.visible').click() //comando contains afirma o elemento desejado
    
            cy.get('div[id="leftmenuinnerinner"]').find('h2[class="left"]').eq(1)
    
            cy.get('a[href="html_forms.asp"]')
                .click()
        })
    
        it('Preencher no campo primeiro nome', () => {
    
            cy.get('input[id="fname"]')
                .should('have.value','John')
            cy.get('input[id="fname"]')
                .clear().type('Curso')
        })
    
        it('Preencher no campo do segundo nome', () => {
    
            cy.get('input[id="lname"]')
                .should('have.value','Doe')
            cy.get('input[id="lname"]')
                .clear().type("De Automacao")
        })
    
        it('Clicar no botão Submit', () => {
    
            cy.get('input[type="submit"]')
                .should('be.visible')
                .eq(1)
                .click()
        })

    })

    context('Testar Checkbox', () => {

        it('Acessar a Url do Site W3Schools', ()=>{
            cy.visit('/')
        })
      
        it('Encontrar o forms de Html', () => {
            cy.get('a[class="w3-button tut-button"]')
                .contains('Learn HTML').should('be.visible').click() //comando contains afirma o elemento desejado
    
            cy.get('div[id="leftmenuinnerinner"]').find('h2[class="left"]').eq(1)
    
            cy.get('a[href="html_forms.asp"]')
                .click()
        })

        it('Testar radio', () => {

            cy.get('input[type="radio"]').eq(0)
                .should('have.value','HTML')

            cy.get('input[type="radio"]').eq(1)
                .should('have.value','CSS')

            cy.get('input[type="radio"]').eq(2)
                .should('have.value','JavaScript')

            /*CLICAR NO CHECKBOX DE VALOR HTML*/

            cy.get('input[type="radio"]').eq(0)
                .check()

            cy.get('input[type="radio"]').eq(0)
                .should('be.checked')

            /*CLICAR NO CHECKBOX DE VALOR CSS*/

            cy.get('input[type="radio"]').eq(1)
                .check()

            cy.get('input[type="radio"]').eq(1)
                .should('be.checked')

            /*CLICAR NO CHECKBOX DE VALOR JavaScript*/

            cy.get('input[type="radio"]').eq(2)
                .check()

            cy.get('input[type="radio"]').eq(2)
                .should('be.checked')
        })

        it('Testar checkbox', () => {

            cy.get('input[type="checkbox"]').eq(2)
                .should('have.value','Bike')
            cy.get('input[type="checkbox"]').eq(3)
                .should('have.value','Car')
            cy.get('input[type="checkbox"]').eq(4)
                .should('have.value','Boat')
            
            /* MARCAR E DESMARCAR CHECKBOX */

            cy.get('input[type="checkbox"]').eq(2)
                .check()
                /*.should('be.check')
                .uncheck()
                .should('be.not.check')*/
        })

    })
})