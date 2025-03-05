describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="todo-input"]').type('first todo item')

    cy.get('[data-testid="todo-input"]').should('have.value', "first todo item")
  })
})