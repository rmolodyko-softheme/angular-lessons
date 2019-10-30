2. Cypress
    1. Install cypress
    2. Create cypress folder
    3. Run cypress open
    4. Create admin.spec.js file with simple test
    ```javascript
    describe('My First Test', function() {
        it('Does not do much!', function() {
            expect(true).to.equal(true)
        })
    })
    ```
    5. Create admin.spec.js spec for testing adding the user
    ```javascript
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
    ```
    6. Give them a task:
        1. Check the user info panel is shown
        2. Check filter by status is working
        2. Check filter by name is working
