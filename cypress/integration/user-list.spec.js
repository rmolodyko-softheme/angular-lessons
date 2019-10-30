describe('Test user-list page', function() {
    it('User info should be opened', function() {
        cy.visit('user-list');
        cy.contains('Ruslan').click();

        cy.contains('Username: Ruslan').should('exist');
    })

    it('Filter by status should work', function() {
        cy.visit('user-list');
        cy.get('select[class="filter-input"]').select('0');

        cy.contains('(Disabled)').should('not.exist');
        cy.contains('(Unknown)').should('not.exist');
        cy.contains('(Deleted)').should('not.exist');

        cy.contains('(Active)').should('exist');
    })

    it('Filter by name should work', function() {
        cy.visit('user-list');
        cy.get('input[class="filter-input"]').type('Ru');

        cy.contains('Mr. Roma').should('not.exist');
        cy.contains('Mr. Ruslan').should('exist');
    })
});
