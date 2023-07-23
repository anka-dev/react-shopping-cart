describe('template spec', () => {

  it('find no of products', () => {

    cy.visit('https://react-shopping-cart-67954.firebaseapp.com')

    cy.get(".sc-ebmerl-4 > p:nth-child(1)").should('have.text', "16 Product(s) found")

    cy.get("div.sc-bj2vay-1:nth-child(7) > label:nth-child(1) > span:nth-child(2)").click()

    cy.wait(100)

    cy.get(".sc-ebmerl-4 > p:nth-child(1)").should('have.text', "10 Product(s) found")

    cy.wait(50)

    cy.get("div.sc-bj2vay-1:nth-child(7) > label:nth-child(1) > span:nth-child(2)").click()

    cy.wait(100)

    cy.get(".sc-ebmerl-4 > p:nth-child(1)").should('have.text', "16 Product(s) found")

 
  })


})