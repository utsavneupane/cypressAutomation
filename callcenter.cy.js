let i;
for(i=0;i<=10;i++){


it('call center automation',function() {
cy.visit("https://system.uat.ordering-merokinmel-migv4.ekbana.net")

cy.get('.email-content > .form-control').type("admin")
cy.get('.password-content > .form-control').type("123admin@")
cy.contains("Login").click() 

cy.get('#add-call').click({force:true}) 

cy.get('#contact-field').type("9860271190").type('{enter}')  


cy.on('uncaught:exception', (err, runnable) => {
    return false
   }) 

   cy.get('.select-warehouse') // Target the dropdown element with class 'select-warehouse'
   .select('Chitwan') // Select the option with value 'Chitwan'
 
cy.contains("Next").click() 


cy.contains("Non Veg Restaurants").should('be.visible').click() 

cy.contains("99 Momo").click() 

cy.get(':nth-child(1) > .card > .card-img-top > .icon-top > .add-product > .img-fluid').click() 

cy.get(':nth-child(2) > .card > .card-img-top > .icon-top > .add-product > .img-fluid').click() 


cy.get(':nth-child(3) > .card > .card-img-top > .icon-top > .add-product > .img-fluid').click() 
cy.wait(500)

cy.contains("Next").click() 

cy.get('.d-flex > input').click() 

cy.contains("Checkout").should('be.visible').click() 


cy.scrollTo(0,500) 

cy.get('textarea[name="order_note"]').type("order from cypress automation")
cy.contains("Create Order").click()
})
}
