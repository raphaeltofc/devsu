/// <reference types="cypress" />

describe('purchase', () => {

  beforeEach(() => {
    //Autenticarse con el usuario: standard_user y password: secret_sauce
    cy.loginViaUI()
   cy.visit('/')
  })

  it('compra en la página', () => {

   
    const s6 = 'Samsung galaxy s6'
    const iphone = 'Iphone 6 32gb'

    const clickNavLink = (linkText) => {
      cy.get('.active > .nav-link')
        .contains(linkText)
        .click();
    }

    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch')
    .should('contain', s6)
    .click()
    cy.get('.name')
    .should('contain', s6)
    cy.get('.col-sm-12 > .btn')
    .should('contain', 'Add to cart')
    .click()

    clickNavLink('Home');

    cy.get(':nth-child(5) > .card > .card-block > .card-title > .hrefch')
    .should('contain', iphone)
    .click()
    cy.get('.name')
    .should('contain', iphone)
    cy.get('.col-sm-12 > .btn')
    .should('contain', 'Add to cart')
    .click()
 
    clickNavLink('Home');

  
    //Visualizar el carrito
    cy.get('#cartur')
    .should('contain', 'Cart')
    .click()


    cy.get('.col-lg-1 > .btn')
    .should('contain', 'Place Order')
    .click()

    //Completar o formulário de compra
    cy.wait(2000)
    cy.get('#name')
    .type('DevSU')

    cy.get('#country')
    .type('Brazil')


    cy.get('#city')
    .type('Rio')

    cy.get('#card')
    .type('5128466980641772')

    cy.get('#month')
    .type('08')

    cy.get('#year')
    .type('26')

    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    .should('have.text', 'Purchase')
    .click()
    
    //Finalizar la compra hasta la confirmación: "THANK YOU FOR YOUR ORDER"
    cy.get('.sweet-alert > h2')
    .should('have.text', 'Thank you for your purchase!')

  })
})