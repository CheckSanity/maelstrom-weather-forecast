import React from 'react'
import IconButton from './icon-button'

describe('<IconButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<IconButton />)
  })

  it('className', () => {
    cy.mount(<IconButton className={'some-class'} />)
    cy.get(':button').should('have.class', 'some-class')
  })

  it('type', () => {
    cy.mount(<IconButton type={'submit'} />)
    cy.get(':button').type('submit')
  })

  it('active', () => {
    cy.mount(<IconButton active={true} />)
    cy.get(':button').should('have.class', 'button_active')
  })

  it('disabled', () => {
    cy.mount(<IconButton disabled={true} />)
    cy.get(':button').should('be.disabled')
  })

  it('click', () => {
    cy.mount(<IconButton onClick={() => alert('Clicked')} />)
    cy.get(':button').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Clicked`)
    })
  })
})
