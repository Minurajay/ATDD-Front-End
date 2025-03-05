describe('Todo App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('can add a todo item', () => {
    // Type a todo item
    cy.get('[data-testid="todo-input"]').type('first todo item')
    
    // Click add button or press enter
    cy.get('[data-testid="add-todo-button"]').click()

    // Verify the todo item appears in the list
    cy.get('[data-testid="todo-item"]').should('contain', 'first todo item')
    
    // Verify input is cleared
    cy.get('[data-testid="todo-input"]').should('have.value', '')
  })

  it('cannot add empty todo items', () => {
    // Try to add an empty item
    cy.get('[data-testid="add-todo-button"]').click()

    // Verify no items are added
    cy.get('[data-testid="todo-item"]').should('not.exist')
  })
})