describe('Test admin page', function() {
    it('User should be created', function() {
        cy.visit('user-list');
        cy.contains('Kolya').should('not.exist');

        cy.contains('Admin').click();
        cy.get('input[name="name"]').type('Kolya');
        cy.get('select[name="status"]').select('1');
        cy.get('#add1').click();

        cy.get('#user-list').click();
        cy.contains('Kolya').should('exist');
    })
});
