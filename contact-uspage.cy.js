

    beforeEach(() => {

      cy.fixture('ContactUs').then(function(data){
          this.data=data
      }) 
    })
        //cy.visit('https://uat.ordering-megakitchen.ekbana.net/') 
        it('Example of Baseurl', () => {
          let url = Cypress.config().baseUrl; //accesing baseUrl
          cy.visit(url); //passing url value to cy.visit()
      });
        
        it('visit site and  Successful Message Submit ',function() {
        cy.scrollTo('bottom');  
        cy.wait(2000);
       // cy.get('/html/body/app-root/div/app-footer/footer/div[2]/div/div[1]/ul/li[4]').click()
     cy.contains('Contact Us').click()
        
   
        cy.get(':nth-child(1) > .field-holder > .ng-untouched').type(this.data.firstName)
        cy.get(':nth-child(2) > .field-holder > .ng-untouched').type(this.data.lastName) 
        cy.get(':nth-child(3) > .field-holder > .ng-untouched').type(this.data.email)
        cy.get(':nth-child(4) > .field-holder > .ng-untouched').type(this.data.phoneNumber) 
       // cy.get('select').eq(1).select('Web').should('have.value','Web')
        cy.get(':nth-child(6) > .field-holder > .ng-pristine').type(this.data.Message) 
        cy.wait(2000);
        cy.get(':nth-child(7) > .btn').click() 
        cy.get('.toast-success > .toast-message').should('have.text',' Message Was Successfully Sent! ')

        cy.wait(2000)
        cy.reload()
  }
  )

    it(' Unsuccesfull message submit ',()=> {
      
          cy.get(':nth-child(1) > .field-holder > .ng-untouched').type('utsav ')
          cy.get(':nth-child(2) > .field-holder > .ng-untouched').type('neupane') 
          cy.get(':nth-child(3) > .field-holder > .ng-untouched').type('utsav.ekbanatest@gmail.com')
          cy.get(':nth-child(4) > .field-holder > .ng-untouched').type('9860271190') 
          cy.get('select').eq(0).select('Web').should('have.value','Web')
          cy.get(':nth-child(6) > .field-holder > .ng-pristine').type('This is the test message done through automation') 
          cy.wait(2000)
          cy.get('.contact-ajax-button > .bgcolor').click()
          cy.wait(2000) 
          cy.scrollTo('top') 
          cy.wait(2000)
          cy.reload()
      
   
}
    )