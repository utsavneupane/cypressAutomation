it('Baseurl',function () {    

  let url = Cypress.config().baseUrl; 
  cy.visit(url)

});

it('Normal checkout in merokishan',function(){  
  
 
cy.contains('Login').click() 
cy.get("#ControlForm_43687 > div:nth-child(1) > input").type('9860271190') 
cy.get("#ControlForm_43687 > div:nth-child(2) > input").type('123456@aA') 
cy.get("#ControlForm_43687 > div.input-filed.input-field-btn > div").click()  
cy.get('.toast-success > .toast-message').should('have.text',' You Have Been Successfully Logged In! ')  
cy.scrollTo(0, 100);

});   

it('category page navigation',function(){  
  cy.get('body > app-root > div > app-header > header > div.header-buttom-nav.sticky-nav > div > div > div > div > div.main-navigation.d-none.d-lg-block > ul > li:nth-child(1)').click()

  cy.get('body > app-root > div > app-header > header > div.header-buttom-nav.sticky-nav > div > div > div > div > div.main-navigation.d-none.d-lg-block > ul > li:nth-child(1)').contains("TROPICAL ")
    click()

  
 
})   ;

