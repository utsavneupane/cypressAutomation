
///  <reference types="Cypress" />
  
  beforeEach(() => { 
    cy.fixture('Environmentkfc').then(function(data){
     
       this.data=data
       



       //let url = Cypress.config().baseUrl; 
       cy.visit('https://uat.ordering-kfc.ekbana.net');  
       cy.contains('Login').click() 
   

    cy.get('#ControlForm_43687 > div:nth-child(1) > input').type(this.data.phoneNumber) 

    cy.get('#ControlForm_43687 > div:nth-child(2) > input').type(this.data.Password) 

    cy.get('.cs-bgcolor').click()  

    cy.get('.toast-success > .toast-message').should('have.text',' You Have Been Successfully Logged In! ') 

    cy.contains('Account').click() 

    cy.url().should('include', 'https://uat.ordering-kfc.ekbana.net/account/profile'); 

    cy.contains('Change Password').click() 

    })
})
 
 /*
 describe('Password change automation',() => { 


  it('Login to account',() => { 
    cy.visit('https://uat.ordering-kfc.ekbana.net/')
    cy.contains('Login').click() 
 

    cy.get('#ControlForm_43687 > div:nth-child(1) > input').type('9860271190') 

    cy.get('#ControlForm_43687 > div:nth-child(2) > input').type('123456@Aa') 

    cy.get('.cs-bgcolor').click()  


//});  

//it('Account page navigation and Change password click',() => {

 cy.get('.toast-success > .toast-message').should('have.text',' You Have Been Successfully Logged In! ') 

    cy.contains('Account').click() 

    cy.url().should('include', 'https://uat.ordering-kfc.ekbana.net/account/profile'); 

    cy.contains('Change Password').click()  

     cy.get('.change-password-section > :nth-child(1) > .ng-pristine')
  .invoke('attr', 'placeholder')
  .should('eq', 'Old Password'); 

  cy.get('.change-password-section > :nth-child(1) > .ng-pristine').type('123456@aA') 

  cy.get('.change-password-section > :nth-child(2) > .ng-pristine')
  .invoke('attr', 'placeholder')
  .should('eq', 'New password');  

  cy.get('.change-password-section > :nth-child(2) > .ng-pristine').type('123456@Aa')  

  cy.get('.change-password-section > :nth-child(3) > .ng-pristine')
  .invoke('attr', 'placeholder')
  .should('eq', 'Confirm Password');  

  cy.get('.change-password-section > :nth-child(3) > .ng-pristine').type('123456@Aa') 

  cy.get('.login-btn').should('be.visible').click()

  cy.get('.toast-success > .toast-message').should('have.text',' Password changed succesfully') 

  cy.url().should('include' ,'https://uat.ordering-kfc.ekbana.net/')  

  cy.get('.toast-success > .toast-message').should('have.text',' Password changed succesfully') 

  //}) ; 

  */
/*

describe('Empty field validation',()=>{
      it('empty field validation',()=>{ 
       
        cy.get('.change-password-section > :nth-child(1) > .ng-pristine')
        .invoke('attr', 'placeholder')
        .should('eq', 'Old Password');  
        
        cy.get('.login-btn').should('be.visible').click()  

        cy.get('.change-password-section > :nth-child(1) > .ng-pristine') 
        cy.get(':nth-child(1) > .text-danger')
        .should('be.visible')
        .and('contain','Old Password is required') 

        cy.get('.change-password-section > :nth-child(2) > .ng-pristine')
        .invoke('attr', 'placeholder')
        .should('eq', 'New password');  

        cy.get('.login-btn').should('be.visible').click()  
        
        cy.get('.change-password-section > :nth-child(1) > .ng-pristine') 
        cy.get(':nth-child(2) > .text-danger')
        .should('be.visible')
        .and('contain','New Password is required')

        cy.get('.change-password-section > :nth-child(3) > .ng-pristine')
        .invoke('attr', 'placeholder')
        .should('eq', 'Confirm Password');  

        cy.get('.login-btn').should('be.visible').click()   

        cy.get('.change-password-section > :nth-child(1) > .ng-pristine') 
        cy.get(':nth-child(3) > .text-danger')
        .should('be.visible')
        .and('contain','Confirm Password is required')


    



  })
})

describe('New and Confirm PAssword doesnot match validation', ()=> {
  it('new and confrim password doesnot match validation',()=> {
    cy.get('.change-password-section > :nth-child(1) > .ng-pristine')
    .invoke('attr', 'placeholder')
    .should('eq', 'Old Password')
    cy.get('.change-password-section > :nth-child(1) > .ng-pristine').type('123456@Aa') 

    cy.get('.change-password-section > :nth-child(2) > .ng-pristine')
    .invoke('attr', 'placeholder')
    .should('eq', 'New password')
    cy.get('.change-password-section > :nth-child(2) > .ng-pristine').type('123456@aA') 

    cy.get('.change-password-section > :nth-child(3) > .ng-pristine')
    .invoke('attr', 'placeholder')
    .should('eq', 'Confirm Password')
    cy.get('.change-password-section > :nth-child(3) > .ng-pristine').type('123456@Aasf')  


    cy.get('.login-btn').should('be.visible').click()


    cy.get('.text-danger') 
    cy.get(':nth-child(3) > .text-danger')
    .should('be.visible')
    .and('contain','Password and Confirm Password must match.')
    

  })
})

describe('New Password format validation',()=> {
  it('password should contains 8 letters with one upper characters',()=> {   

    cy.get('.change-password-section > :nth-child(1) > .ng-pristine')
    .invoke('attr', 'placeholder')
    .should('eq', 'Old Password')
    cy.get('.change-password-section > :nth-child(1) > .ng-pristine').type('123456@Aa')  

    cy.get('.change-password-section > :nth-child(2) > .ng-pristine')
    .invoke('attr', 'placeholder')
    .should('eq', 'New password')
    cy.get('.change-password-section > :nth-child(2) > .ng-pristine').type('123456') 


    cy.get('.change-password-section > :nth-child(3) > .ng-pristine')
    .invoke('attr', 'placeholder')
    .should('eq', 'Confirm Password')
    cy.get('.change-password-section > :nth-child(3) > .ng-pristine').type('123456') 
     
    cy.get('#ControlForm_43687 > div.change-password-section > div:nth-child(2) > div').should('contain','Password must contain at least 8 characters, 1 uppercase letter,1 lowercase letter and a number.')
    
   

  }) 
}) */

describe('Old password doesnot match',()=>{
  it('old password toast',()=>{ 
    
    cy.get('.change-password-section > :nth-child(1) > .ng-pristine')
    .invoke('attr', 'placeholder')
    .should('eq', 'Old Password'); 
  
    cy.get('.change-password-section > :nth-child(1) > .ng-pristine').type('123456@aA') 
  
    cy.get('.change-password-section > :nth-child(2) > .ng-pristine')
    .invoke('attr', 'placeholder')
    .should('eq', 'New password');  
  
    cy.get('.change-password-section > :nth-child(2) > .ng-pristine').type('123456@Aa')  
  
    cy.get('.change-password-section > :nth-child(3) > .ng-pristine')
    .invoke('attr', 'placeholder')
    .should('eq', 'Confirm Password');  
  
    cy.get('.change-password-section > :nth-child(3) > .ng-pristine').type('123456@Aa') 
  
    cy.get('.login-btn').should('be.visible').click() 

    

   cy.intercept('https://api.uat.ordering-kfc.ekbana.net/api/v1/change-password').as('posts')


   cy.wait('@posts').then((interception) => {
    // Access the intercepted request and perform assertions
    const request = interception.request;
    const response = interception.response;
  
    expect(request.method).to.equal('POST');
    expect(response.statusCode).to.equal(404);
    // ... Other assertions on request/response data
  });



  })
})