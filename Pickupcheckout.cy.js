

describe('Test Suite', () => {
  beforeEach(() => {
    // Perform any setup or common actions before each test case 
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.fixture('user').then(function(data){
      this.data=data
  }) 

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

    /* cy.get(':nth-child(4) > .justify-center > :nth-child(3)').click()
    cy.wait(1000)
    cy.get('.Toastify').contains('Product Updated Successfully') 
   */
    cy.contains('Proceed To Checkout').click() 
 
    // checkout page 

    cy.contains('Place Order').click() 
    if( 
     cy.get('.Toastify').contains('Please Add Personal Detail and click on the Next button')
    ){
    cy.contains('Log in').click()
   } 
   else{
    cy.visit(cypress.config().baseUrl)
   } 

   cy.contains('Continue').should('be.visible').click() 
  
cy.get('input[name="account"]')
     .should('have.attr', 'placeholder', 'Phone Number/Email') 
     .wait(500)
     .type('9860271190d')
  
 cy.get('input[name="password"]')
     .should('have.attr', 'placeholder', 'Password')
     .type('123456@aA') 
     .type('{enter}')
    if( 
      cy.get('.Toastify').contains('Invalid Login Credential') 
     ){ 

      cy.get('input[name="account"]')
     .should('have.attr', 'placeholder', 'Phone Number/Email') 
     .wait(500)
     .clear()
     .type(this.data.phoneNumber) 

      cy.get('input[name="password"]')
     .should('have.attr', 'placeholder', 'Password')
     .clear()
     .type(this.data.password) 
     .type('{enter}') 


     cy.get('.Toastify').should('contain','You have been successfully logged in.') 
     }  

 // merge/remove flow 
/*
     if( cy.contains('You already have items. Do you want to delete your previous items?') )
       {
             cy.contains(' Pick Up').click()
            } 

    else{
// select pickup flow 
     cy.wait(500)
    // cy.contains('Remove').should('contain.text','Remove').click() 
    cy.contains('Merge').should('contain.text','Merge').click() 

    } 


cy.contains('You already have items. Do you want to delete your previous items?')
.its('length')
.then((length) => {
  if (length !== 0) {
    
    cy.wait(500);
    cy.contains('Remove').should('contain.text', 'Remove').click();
  }  
  else {
    cy.contains('Pick Up').click(); 
  }
}) 
*/ 

// checkout page 

cy.contains('Pick Up').click()



 cy.get('.grid > :nth-child(1) > .text-sm > .capitalize').should('contain.text', 'Jawalakhel Outlet' ).click()  
 cy.scrollTo(0,300)
 cy.wait(2000)
 cy.contains('Next').should('be.enabled').click({multiple:true})   

//  order  with prefilled time 
 cy.wait(500) 

 cy.contains('Others').click()  

 cy.get('input[name="name"]')
     .should('have.attr', 'placeholder', 'Enter Your Name') 
     .wait(500)
     .type('cypress test')
  
 cy.get('input[name="phoneNumber"]')
     .should('have.attr', 'placeholder', 'Enter Your Phone Number')
     .type('9860271199') 
 cy.contains('Next').should('be.enabled').click() 

 // order note 

 cy.get('.textarea').type('this is from automation') 

 cy.contains('Place Order').click()
 cy.get('.Toastify').should('contain.text','Checkout Successful.') 

 if(cy.url().should('include','/checkout/review?success=true')) 
 {
  cy.contains('Continue Shopping').click()
 }
 
 }) 

}) 
/*
after(() => {
  cy.scrollTo(500,0) 
  cy.wait(3000)
  cy.contains('TOTAL PRICE').should('be.visible').click() 
  cy.wait(1000)
  cy.get('[aria-label="cart"]').should('contain.text',"CART").click() 

  cy.url().should('include','https://uat.ordering-pizzaplanet.ekbana.net/cart')  

  cy.contains('Clear Shopping Cart').click()
  //cy.get('[data-cy="Clear Shopping Cart"]').click()
}) 
*/