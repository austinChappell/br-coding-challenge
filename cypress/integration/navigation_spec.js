const url = 'http://localhost:3000/';

describe('Navigation', () => {
  it('should go to map route from index', () => {
    cy.visit(url);
    // wait 15 seconds for api request
    cy.wait(15000);
    cy.get('.NavBar').find('a').last().click();
    cy.location().should((loc) => {
      expect(loc.href).contains('/map');
    });
  });

  it('should navigate back to index', () => {
    cy.get('.NavBar').find('h1').find('a').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(url);
    });
  });

  it('should open panel', () => {
    cy.get('.GridItem').first().click();
    cy.get('.Panel').should('have.attr', 'style', 'left: 0px;');
  });

  it('should close panel', () => {
    cy.get('.NavBar').find('img').first().click();
    cy.get('.Panel').should('have.attr', 'style', 'left: -100vw;');
  });
});
