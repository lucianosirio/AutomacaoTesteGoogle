describe('Teste de API', () => {

    it('Teste de API', () => {

        cy.request({

            method: 'POST',
            failOnStatusCode: false,
            url: 'https://track-selectmedia.com/trackv4?bulkV3=true&version=1297&uuid=ba47cbb8-f50d-48d0-ab4d-ae6ffe103835',
            headers:
            {
            Authorization: 'track-selectmedia.com',
            'content-type': 'application/json'
            },


        }).then((teste) =>{
            cy.log(JSON.stringify(teste.body))
            //expect(teste.body.Message).to.eq("Registro salvo com sucesso.")
        })

    })

})