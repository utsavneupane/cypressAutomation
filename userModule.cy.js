
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

    cy.contains('Add New').should('contain.text',"Add New").click()

    cy.url().should('contain','customers/create')

 
})
}) 