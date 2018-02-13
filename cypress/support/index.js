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
/* global cy */

export const Arrows = {
  up: '{uparrow}',
  down: '{downarrow}',
  left: '{leftarrow}',
  right: '{rightarrow}'
}

function triggerArrow (arrow) {
  cy.document().its('body').type(arrow)
  // wait for a second. If there was consistent _unique_ CSS selector
  // for "transition going on", and then "transition finished"
  // we could select on that to avoid hard coded duration
  cy.wait(1000)
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
