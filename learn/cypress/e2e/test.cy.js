describe('hello world', () => {
  it('passes', () => {
    cy.visit('http://localhost:9000/');
    cy.get('h1').should('have.text', 'Hello, World!');
  });
});
