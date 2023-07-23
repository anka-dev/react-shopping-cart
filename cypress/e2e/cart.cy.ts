describe('checks that the cart can be opened and closed and verifies that it is visible or not depending on state', () =>

{
  it('cart can be opened and closed', () => {

    cy.visit('https://react-shopping-cart-67954.firebaseapp.com')

    cy.wait(100)

    cy.get(".sc-1h98xa9-6").should('not.exist')

    cy.get(".sc-1h98xa9-2").click()

    cy.wait(100)

    cy.get(".sc-1h98xa9-6").should('exist')

    cy.get(".sc-1h98xa9-0").click()

    cy.wait(100)

    cy.get(".sc-1h98xa9-6").should('not.exist')

  
  })
})