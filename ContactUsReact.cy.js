
describe('Test Suite', () => {
  beforeEach(() => {
    // Perform any setup or common actions before each test case 
    let url = Cypress.config().baseUrl; 
    cy.visit(url); 
    cy.get(':nth-child(5) > .p-0').contains("Contact Us").click()
  });

 
  it('Successful submission',function () { 
 // first name
    cy.get('input[name="first_name"]')
     .should('have.attr', 'placeholder', 'First Name')
     .type('John')

     // last name
     cy.get('input[name="last_name"]')
     .should('have.attr', 'placeholder', 'Last Name')
     .type('John')


  // email 
    cy.get('input[name="email"]')
  .type('John@gmail.com')

 // phone number  
   
    cy.get('input[name="mobile_number"]')
    //.should('have attr','placeholder','Phone Number')
    .type('9860271190')
  
// message 

  cy.get('textarea[name="context"]')
  .should('have.attr', 'placeholder', 'Message Here')
  .type('This is the test message')

  // feedback-section
// cy.get('button[type="button"]').click() 


   cy.get('button[type="submit"]').click({ multiple: true }) 

  // assert success through url  

  cy.url().should('include', Cypress.config().baseUrl) 

  cy.wait(500)
  }) ;
 


  it('empty validation message',function(){


    // first name
    cy.get('input[name="first_name"]')
     .should('have.attr', 'placeholder', 'First Name')
    

     // last name
     cy.get('input[name="last_name"]')
     .should('have.attr', 'placeholder', 'Last Name')
     


  // email 
    cy.get('input[name="email"]')
  .should('have.attr', 'placeholder', 'Email')
  

 // phone number  
   
    cy.get('input[name="mobile_number"]')
    
  
// message 

  cy.get('textarea[name="context"]')
  .should('have.attr', 'placeholder', 'Message Here')
  
 

   cy.get('button[type="submit"]').click() 

   cy.get('p.text-destructive').contains('First name is required')
   cy.get('p.text-destructive').contains('Last name is required')
   cy.get('p.text-destructive').contains('Email is required.')
   cy.get('p.text-destructive').contains('Phone number is required.')
   cy.get('p.text-destructive').contains('Message is required.')
  })  ;


  it('email format validation',function(){

    cy.get('input[name="email"]').type('utsav@gmail.com')
   // .should('have.attr', 'placeholder', 'Email')
    
   cy.get('button[type="submit"]').click()  
   //cy.get('p.text-destructive').contains('Invalid email address.') 

   cy.get('input[name="email"]').should(($input) => {
    const value = $input.val();
    expect(value).to.match(/^.+@.+\..+$/); // Matches any string with "@" and "."
    expect(value).to.match(/^.+@.+\.(com|COM)$/); // Matches ".com" or ".COM" at the end
  }) 
 
  }) ;
 
  it('phone number format and length validation', function(){
    // phone number  
   
   cy.get('input[name="mobile_number"]').type("9860271190") 

  cy.get('input[name="mobile_number"]').should(($input) => {
    const value = $input.val();
    expect(value).to.match(/^\b9\d{9}\b$/)}) // number should start from 9 and be of 10 digits 
    .then(() => { 
      cy.log('Mobile number format is valid');
      // Additional actions...
    })
    
  }) ;

  });
