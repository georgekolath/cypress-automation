/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://eqs.com')

})

describe('Verify the homepage', () => {
    it('Verify menu bar', () => {
        cy.get('a[href="#compliance-solutions"]').should('be.visible')
        cy.get('a[href="#ir-solutions"]').should('be.visible')
        cy.get('a[href="#about-eqsgroup"]').should('be.visible')
    
        
    

        

    })

    
})