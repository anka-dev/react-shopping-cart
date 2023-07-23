describe('checks that the number of filters available are 7 ', () => {

  it('checks that the number of filters are 7', () => {

    cy.visit('https://react-shopping-cart-67954.firebaseapp.com')

    cy.get("div.sc-bj2vay-1").should('have.length',7)


  })


})