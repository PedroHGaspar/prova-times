describe('Sistema do CARTOLA deve', () => {
    it('Abrir a página', () => {
        cy.visit('http://localhost:5173/')
    })
    
    it('clicar no primeiro time', () => {
        cy.visit('http://localhost:5173/')
        cy.get('.time-items-list').eq(0).click();
    })
    
    it('clicar no segundo time', () => {
        cy.visit('http://localhost:5173/')
        cy.get('.time-items-list').eq(1).click();
    })
})
