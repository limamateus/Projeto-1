describe('Pagina de Login', () => {
    it('Clicar no botão acessar e validar se está mostrando as mensagem de erro', () => {
       // 1- Acessar o Link do Touchone
      cy.visit('https://app.touchone.com.br')      
      //  2- Clicando no botão Acessar para realizar o login.
      cy.contains('button','Acessar').click(); 
      //  3- Validar se a mensagem de e-mail é obrigatorio está visivel 
      cy.contains('O e-mail é obrigatório.').should('be.visible')
      
      //  4- Validar se a mensagem de senha é obrigatorio está visivel 
      cy.contains('A senha é obrigatória.').should('be.visible')
    })
  })