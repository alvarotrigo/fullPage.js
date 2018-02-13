import { Arrows, slide, checkActiveSlide, activeSlide } from '../support'

/* eslint-env mocha */
/* global cy */
describe('simple example', () => {
  beforeEach(() => {
    cy.visit('/examples/simple')
    cy.get('#fullpage').should('be.visible')
  })

  it('loads', () => {
    cy.contains('fullPage.js')
  })

  it('hides second page', () => {
    cy.contains('Only text').should('not.be', 'visible')
  })

  it('goes down to second slide', () => {
    // cy.document().its('body').trigger('keydown', { which: Arrows.down })
    cy.document().its('body').type('{downarrow}')
    cy.contains('.section', 'Only text').should('have.class', 'active')
  })

  it('goes down to 2nd slide - auto wait', () => {
    slide.down()
    checkActiveSlide('Only text')
  })

  it('goes down to 4th slide', () => {
    slide.down()
    slide.down()
    slide.down()
    checkActiveSlide('Just the simplest demo ever')
  })

  it('does not have left or right arrows on the first slide', () => {
    activeSlide().find('.fp-prev').should('not.exist')
    activeSlide().find('.fp-next').should('not.exist')
  })

  it('shows left and right arrows', () => {
    slide.down()
    checkActiveSlide('Only text')
    activeSlide().find('.fp-prev').should('be.visible')
    activeSlide().find('.fp-next').should('be.visible')
  })

  it('goes horizontally', () => {
    slide.down()
    checkActiveSlide('Only text')
    slide.right()
    checkActiveSlide('And text')
    slide.right()
    checkActiveSlide('And more text')
    slide.left()
    checkActiveSlide('And text')
    slide.down()
    checkActiveSlide('No wraps, no extra markup')
  })

  it('loops horizontally', () => {
    slide.down()
    checkActiveSlide('Only text')
    slide.right()
    checkActiveSlide('And text')
    slide.right()
    checkActiveSlide('And more text')
    slide.right()
    checkActiveSlide('Simple Demo')
    slide.right()
    checkActiveSlide('Only text')
  })
})
