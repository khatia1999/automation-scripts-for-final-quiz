describe('cart', ()=> {
    
    beforeEach(() => {
        cy.visit('https://zootopia.ge/ka')
      })

    
    it('testing product adding in the cart', ()=>{

        cy.get(':nth-child(5) > .swiper-container > .swiper-wrapper > .swiper-slide-active > .price-cart > .product-cart').click()
       
        
    })

   it('testing product increasing in the cart', ()=> {
    cy.get(':nth-child(5) > .swiper-container > .swiper-wrapper > .swiper-slide-active > .price-cart > .product-cart').click()
        cy.get('.menu-pop > [href="https://zootopia.ge/ka/cart"]').click()
        cy.get('.plus').click().click().click()
        
    })




})