describe('Test Suite', () => {
    beforeEach(() => {
      // Perform any setup or common actions before each test case 
      let url = Cypress.config().baseUrl;
      cy.visit(url);
      cy.fixture('user').then(function(data){
        this.data=data
        }) 
  
    })

    
})