

describe('Test Suite', () => {
    beforeEach(() => {
      // Perform any setup or common actions before each test case 
      let url = Cypress.config().backendbaseUrl;
      cy.visit(url);
      cy.fixture('backend').then(function(data){
        this.data=data
    }) 


})

it('login to cms and navigate to the Customers module',function() {
    cy.get(':nth-child(3) > .form-control').type(this.data.username);
    cy.get(':nth-child(4) > .form-control').type(this.data.password) 

    cy.contains('Sign In').should('be.visible').click() 

    cy.get(':nth-child(12) > .nav-link').click() 
    cy.scrollTo(100,0)
    cy.contains('Customer').click({force:true})   

   cy.wait(2000)
   cy.on('uncaught:exception', (err, runnable) => {
   

  
    return false
  })
  cy.contains('Add New').should('contain.text',"Add New").click()

    cy.wait(4000)
    
    // empty submit validations 
cy.scrollTo(0,500)
cy.get('.btn-primary').should('be.visible').click() 



    cy.get('#first_name').type('automation')
    cy.get('#last_name').type('user') 
    cy.get('#email').type('cypressuser@gmail.com') 
    cy.get('#mobile_number').type('9860271191') 
    cy.get('#verified-1').check()
    cy.get('#password').type('123456@aA')
    cy.get('#password_confirmation').type('123456@aA')
    cy.get('.btn-primary').click({multiple:true})

    if(cy.url().should('eq', 'https://system.uat.ordering-pizzaplanet.ekbana.net/customers')) {
        cy.log("user created successfully") 
    }
        else(
            cy.log("error in code")
        )
    
}) 
  after(()=>{
    cy.get('tr[td*="automation user"]').find('button.btn-delete'); // Modify "automation user" if needed

    

     cy.contains('Delete').click()
 }) 

}) 