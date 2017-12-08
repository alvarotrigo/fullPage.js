// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

export const Arrows = {
  up: 38,
  down: 40,
  left: 37,
  right: 39
}

function triggerArrow (which) {
  cy.document().its('body').trigger('keydown', { which }).wait(1000)
}

export const slide = {
  down () {
    triggerArrow(Arrows.down)
  },

  up () {
    triggerArrow(Arrows.up)
  },

  left () {
    triggerArrow(Arrows.left)
  },

  right () {
    triggerArrow(Arrows.right)
  }
}

export function checkActiveSlide (text) {
  cy.contains('.section', text).should('have.class', 'active')
}

export const activeSlide = () => cy.get('.section.active')
