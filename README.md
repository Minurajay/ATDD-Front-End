# Todo App - Acceptance Test Driven Development (ATDD)

This project demonstrates Acceptance Test Driven Development (ATDD) methodology for building a simple Todo application.

## Development Cycle

This project follows the ATDD cycle:

1. **Write Acceptance Tests**: Define how the application should behave from a user's perspective using Cypress
2. **Write Unit Tests**: Create Jest tests for individual components and functions
3. **Implement the App**: Develop the application to satisfy the tests
4. **Make Tests Green**: Ensure all tests pass
5. **Refactor**: Improve code quality without changing functionality


## Features

- Add new tasks
- Mark tasks as complete
- Delete tasks
- Local storage persistence
- Clean, responsive UI


## Getting Started

### Installation

```bash
cd todo-app
npm install
```

### Running the App

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Testing

### Jest Tests

Run unit tests:

```bash
npm run ci:test
```

### Cypress Tests

Open Cypress test runner:

```bash
npm run cy:open
```

## Test Files

- `add.spec.js`: Jest unit tests for component functionality
- `add.cy.js`: Cypress acceptance tests for end-to-end testing