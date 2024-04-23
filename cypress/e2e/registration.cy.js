describe('Registration', ()=>{
    beforeEach(() => {
        cy.visit('https://zootopia.ge/ka')
      })
    it('registration functionality testing without agree To terms and conditions  field', ()=> {

      
       cy.get('.menu-pop > .rprof').click()
       cy.get('.input-shablon > p > a').click()
       cy.get(':nth-child(1) > .ismile').type('khatia ormotsadze')
       cy.get(':nth-child(2) > .imail').type('khatia@gmail.com')
       cy.get('.ipir').type('11111111111')
       cy.get(':nth-child(4) > .itel').type('555545554')
       cy.get(':nth-child(4) > .itel').type('Xatia1')
       cy.get('.reg-form-left > :nth-child(6) > .ipass').type('Xatia1')
       cy.get('.regsub').click()

    })


    it('registration functionality testing,when passwords are not same ', ()=> {
        
       cy.get('.menu-pop > .rprof').click()
       cy.get('.input-shablon > p > a').click()
       cy.get(':nth-child(1) > .ismile').type('khatia ormotsadze')
       cy.get(':nth-child(2) > .imail').type('khatia@gmail.com')
       cy.get('.ipir').type('51111111111')
       cy.get(':nth-child(4) > .itel').type('555545554')
       cy.get(':nth-child(5) > .ipass').type('Xatia1')
       cy.get('.reg-form-left > :nth-child(6) > .ipass').type('Xatia2')
       cy.get('.etx > p').click()
       cy.get('.regsub').click()


    })

    it ('testing that all fields are required', ()=> {
       
       cy.get('.menu-pop > .rprof').click()
       cy.get('.input-shablon > p > a').click()
       cy.get(':nth-child(1) > .ismile').type('khatia ormotsadze')
       cy.get('.etx > p').click()
       cy.get('.regsub').click()
    }) 

    it ('testing that ID is always numbers', ()=> {
       
        cy.get('.menu-pop > .rprof').click()
        cy.get('.input-shablon > p > a').click()
        cy.get(':nth-child(1) > .ismile').type('khatia ormotsadze')
        cy.get('.etx > p').click()
        cy.get('.regsub').click()
     }) 

})


