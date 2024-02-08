describe('Test Suite', () => {
    beforeEach(() => {
      // Perform any setup or common actions before each test case 
      let url = Cypress.config().baseUrl;
      cy.visit(url);
    
    })

    it('Add to cart from category-product detail page',function(){  
        cy.scrollTo(0,500)
        cy.get(':nth-child(1) > .relative > .w-full').click() 
        cy.scrollTo(0,500) 
        cy.get(':nth-child(2) > .card-body > .justify-between > .false').should('be.visible').click() 
        cy.wait(1000)
        cy.get('.Toastify').contains('Item Added To Cart Successfully') 
       
     // cart page 
    
        cy.scrollTo(500,0)
        cy.contains('TOTAL PRICE').should('be.visible').click() 
    
        cy.get('[aria-label="cart"]').should('contain.text',"CART").click() 
    
        cy.url().should('include','https://uat.ordering-pizzaplanet.ekbana.net/cart')   

        cy.scrollTo(0,3000)

      if(  cy.get('tbody > :nth-child(1) > :nth-child(4) > .justify-center > .flex').should('include', '1')) 
      {
        cy.get('tbody > :nth-child(1) > :nth-child(4) > .justify-center > :nth-child(1)').should('be.disabled')
      }
 
}) 

})