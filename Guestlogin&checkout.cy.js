beforeEach(() => {

    cy.fixture('user').then(function(data){
        this.data=data
    }) 
  });

it('Guestlogin and Checkout',function () {
      
        
    cy.visit('https://uat.ordering-foodmood.ekbana.net') 
 // product detail page   
    cy.get(':nth-child(5) > .page-section > .container > .row > :nth-child(2) > .swiper-container > .swiper-wrapper > .swiper-slide-active > :nth-child(1) > .list-product').click()
    cy.wait(2000) 
 // add to cart   
    cy.get('.pro-details-cart > button').click()    
    //cy.wait(7000) 
    cy.get('.toast-success > .toast-message').click() 
 // cart popup box   
    cy.get('.cart-image > .fas').click() 
    cy.wait(2000)
    cy.contains(' Proceed to checkout ').click()
// login 
cy.wait(2000)
    cy.get('.cs-bgcolor').click()
    cy.contains(' Login To Your Account ').should('be.visible')
    cy.wait(3000)
    cy.get(':nth-child(1) > .b-margin').type(this.data.email)
    cy.get(':nth-child(2) > .b-margin').type(this.data.password)
    cy.get('.cs-bgcolor').click() 
    cy.get('.toast-success > .toast-message').click() 

// merge/delete items  
    // cy.get('.remove-btn').click() 
// delivery address add 
  /*
cy.get('.col-lg-4 > .mouse-pointer').click()
    cy.get('#map').click()
    cy.get('.mapFormBlock > .ng-invalid').type('nepal')  
    cy.get('.delivery-submit-btn').click()
    cy.get('.toast-success > .toast-message').click()
   */ 
// delivery address edit 
//cy.get(':nth-child(2) > .update-address > .edit-del-address > :nth-child(2) > span.mouse-pointer').click() 


    
    cy.get('.form-group > .form-control').type('order through automation ') 
    cy.get('.user-nav-list > .mouse-pointer').click() 
    cy.wait(5000)
    cy.contains('Order Successful').should('be.visible') 
    cy.get('.continue-shopping-btn').click()
})