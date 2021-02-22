// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('arithmetical operations should update the display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4')

  })

  it('multiple operations could be chained together', () => {
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number8').click();
    cy.get('#operator_subtract').click();
    cy.get('#number1').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '32')

  })

  it('output is as expected for positive numbers', () =>{
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3')
  })

  it('output is as expected for negative numbers', () =>{
    cy.get('#number1').click();
    cy.get('#operator_subtract').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-8')

  })

  it('output is as expected for decimal numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1.5')
  })

  it('output is as expected for very large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number1').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number1').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '962361')

  })

  it('should give error message if divided by zero', () => {
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Error, division by zero')
  })

})
