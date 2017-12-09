import { checkActiveSlide } from '../support'

/* eslint-env mocha */
/* global cy */
describe('simple example', () => {
  beforeEach(() => {
    cy.visit('/examples/methods')
    cy.get('.fullpage-wrapper').should('be.visible')
  })

  const getMenuButtons = () => cy.get('ul#menu li')

  const getMenuButton = title => getMenuButtons().contains(title)

  it('has slide buttons', () => {
    // 4 buttons on the top
    getMenuButtons().should('have.length', 4)
    getMenuButtons().contains('First slide')
    getMenuButton('Second slide')
    getMenuButton('Third slide')
    getMenuButton('Fourth slide')
  })

  it('is at first slide at first', () => {
    checkActiveSlide('Section 1')
  })

  it('goes to second slide by clicking on menu button', () => {
    getMenuButton('Second slide').click()
    checkActiveSlide('Section 2')
  })

  it('goes to third slide and fourth slide', () => {
    getMenuButton('Third slide').click()
    checkActiveSlide('Section 3')

    getMenuButton('Fourth slide').click()
    checkActiveSlide('Section 4')
  })

  it('does not url hash initially', () => {
    cy.hash().should('eq', '')
  })

  it('changes url hash after transition', () => {
    getMenuButton('Second slide').click()
    checkActiveSlide('Section 2')
    cy.hash().should('eq', '#secondPage')
  })

  context('actions', () => {
    const getActions = () => cy.get('#actions').should('not.be', 'empty')

    const getAction = title => getActions().contains(title)

    it('has actions', () => {
      getActions()
    })

    it('slides down', () => {
      getAction('moveSectionDown').click()
      checkActiveSlide('Section 2')
    })

    it('moves to slide 2/3', () => {
      getAction('moveTo(2,3)').click()
      checkActiveSlide('Slide 2.3')
      cy.hash().should('eq', '#secondPage/3')
    })

    it('destroys all', () => {
      getAction("destroy('all')").click()
      cy.get('.fullpage-wrapper').should('have.class', 'fp-destroyed')
    })

    it('undestroys', () => {
      getAction('undestroy').click()
      cy.get('.fullpage-wrapper').should('not.have.class', 'fp-destroyed')
    })
  })
})
