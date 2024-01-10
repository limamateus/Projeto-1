describe('Pagina de Login', () => {

  beforeEach(()=>{
     // 1- Acessar o Link do Touchone
    cy.visit('https://app.touchone.com.br')     
  })

  it('Preencher os campos de E-mail e senha e clicar no botão para realizar o login 123456', () => {    
    
    //  2- Informando o e-mail
    cy.get('[name="email"]').type('testesmateuscombo@uorak.com') 
    //  3- Informando a Senha   
    cy.get('[name="senha"]').type('123456') 
    //  4- Clicando no botão Acessar para realizar o login.
    cy.contains('button','Acessar').click(); 
    
  })
 
})