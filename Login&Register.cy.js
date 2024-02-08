



    beforeEach(() => {

        cy.fixture('user').then(function(data){
            this.data=data
        }) 
      });
    it('Register',function () {
      
        
        cy.visit('https://uat.ordering-foodmood.ekbana.net')
        cy.get(':nth-child(3) > span').click()
        cy.get('.foodbakery-company-name > .ng-untouched').type(this.data.firstName) 
        cy.get('.wp-user-form > :nth-child(2) > .ng-untouched').type(this.data.lastName)
        cy.get(':nth-child(3) > .ng-untouched').type(this.data.phoneNumber)
        cy.get(':nth-child(4) > .ng-untouched').type(this.data.email)
        cy.get(':nth-child(5) > .ng-untouched').type(this.data.password)
        cy.get(':nth-child(6) > .ng-untouched').type(this.data.confirmPassword)
        cy.get('label').click()
        cy.get('.cs-bgcolor').click() 
        cy.wait(3000)
    })

  
    it('Login',function () {
      
            cy.wait(2000)
            cy.get('.cs-bgcolor').click()
            cy.contains(' Login To Your Account ').should('be.visible')
            cy.wait(3000)
            cy.get(':nth-child(1) > .b-margin').type(this.data.email)
            cy.get(':nth-child(2) > .b-margin').type(this.data.password)
            cy.get('.cs-bgcolor').click() 

   
})
  