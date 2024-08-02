describe('API Testing with Cypress', () => {
  const apiUrl = 'https://api.demoblaze.com';
  const newUser = `newUser_${Math.random().toString(36).substring(7)}`;
  const password = 'test123';

  it('should successfully create a new user', () => {
      cy.request('POST', `${apiUrl}/signup`, {
          username: newUser,
          password: password
      }).then(response => {
          expect(response.status).to.eq(200);
          Cypress.env('username', newUser);
          Cypress.env('password', password);
      });
  });

  it('should fail to create a user that already exists', () => {
      cy.request('POST', `${apiUrl}/signup`, {
          username: newUser,
          password: password
      }); 

      cy.request({
          method: 'POST',
          url: `${apiUrl}/signup`,
          body: {
              username: newUser,
              password: password
          },
          failOnStatusCode: false 
      }).then(response => {
          expect(response.status).to.eq(200); 
          expect(response.body.errorMessage).to.eq('This user already exist.'); 
      });
  });

  it('should not log in with incorrect credentials', () => {
    const username = Cypress.env('username');  // Usa o username armazenado no ambiente de teste

    cy.request({
        method: 'POST',
        url: `${apiUrl}/login`,
        failOnStatusCode: false,  
        body: {
            username: username,  
            password: 'wrongPassword'  
        }
    }).then(response => {
        expect(response.status).to.eq(200); 
        expect(response.body).to.have.property('errorMessage', 'Wrong password.');  
    });
});





it('should not log in with incorrect credentials', () => {
  const username = Cypress.env('username');  

  cy.request({
      method: 'POST',
      url: `${apiUrl}/login`,
      failOnStatusCode: false, 
      body: {
          username: username,  
          password: 'wrongPassword' 
      }
  }).then(response => {
      expect(response.status).to.eq(200); 
  });
});
});
