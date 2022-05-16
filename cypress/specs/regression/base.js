describe('Login to Trello', () => {

    before(() => {
        cy.visit('/')
    })

    it('Check page Title', () => {
        cy.title().should('eq', 'NewBoard | Trello')
    })

    it('Check page Url', () => {
        cy.url().should('eq', 'https://trello.com/b/WobiSXIJ/newboard')
    })
})