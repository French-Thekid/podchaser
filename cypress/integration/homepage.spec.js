const PODCAST = Cypress.env('podcast')

describe('renders home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Home page renders correctly', () => {
    cy.get('#layout').should('exist')
  })

  it('has title and subtitle', () => {
    cy.findByText('All Podcast').should('exist')
    cy.findByText('Browse the details of every podcast, ever.')
      .should('exist')
      .and('be.visible')
  })

  it('Fetch and verify podcasts', () => {
    // cy.get('#layout').should('exist')
    cy.request('https://api.podchaser.com/userlists/27998').then((response) => {
      expect(response).to.have.property('status', 200)
      expect(response.body).to.not.be.null
      expect(response.body.list).to.not.be.null
      expect(response.body.list.items).to.not.be.null
      expect(response.body.list.items).to.have.length(20)
    })
  })

  it(`Routes to a podcast page on ${PODCAST} card click`, () => {
    cy.findAllByText(PODCAST).should('exist')
    cy.findAllByText(PODCAST).click()
    cy.url().should('include', 'podcast')
    cy.get('#podcastMainContainer').should('exist').and('be.visible')
    cy.get('#podcastImage').should('exist').and('be.visible')
    cy.findAllByText(PODCAST).should('exist').and('be.visible')
    cy.findByText('Recent Episodes').should('exist').and('be.visible')
  })

  it(`Fetch and verify selected (${PODCAST}) podcast`, () => {
    // cy.get('#layout').should('exist')
    cy.request('https://api.podchaser.com/podcasts/243479').then((response) => {
      expect(response).to.have.property('status', 200)
      expect(response.body).to.not.be.null
      expect(response.body).to.have.property('title', PODCAST)
      expect(response.body).to.have.property('id', 243479)
    })
  })

  it('routes to home page from podcast page on logo click', () => {
    cy.get('#layout').should('exist')
    cy.get('#layout').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.findByText('All Podcast').should('exist').and('be.visible')
  })
})
