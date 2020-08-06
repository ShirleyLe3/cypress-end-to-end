//Objectives
//  1. make assertion that each field in form can be filled out with proper values
//  2. button disabled if form is not filled out
//  3. button enabled when form is properly filled out
//  4. provide invalid values to ensure error message is displayed


describe('form teset', () => {

    it('test that the form is testing properly', () => {
    
    cy.visit('/')
        // crypto.visit('http://localhost:3002/')

    //giives us the selector we use
    //allows cypress to select a target or element on the page. 
    
    cy.get('[for="name] > input')
        // grabbed input target and chaining. 
        .type('Shirley Lee')
        .should('have.value', 'Potato 0/ salad')
        //grabbing value,   should have value of shirley

        const email = 'slee@email.com';   // makes easier
    cy.get('[for="email] > input')
        .type('email')
        .should('have.value', 'email')

        const motivation = 'I want to help other in the community'
    cy.get('textarea#motivation')          // dont use textarea: too general
        .type('motivation')
        .should('have.value', '')

    cy.get('selectpositions')    
        .select('Yard Work')
        .should('have.value', 'Yard Work')

    cy.get('for="terms" > input')       //enables button
        .click()                        // clicked checkbox
        .should('have.checked', 'true')

     // disable button   assertion      needs to be moved at top to not fail enable button
    cy.get('button#submit')
        .should('be.deisabled')


})
})