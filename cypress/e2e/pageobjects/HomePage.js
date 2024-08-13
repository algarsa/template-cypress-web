/// <reference types="Cypress" />

import HomeElements from "../elements/HomeElements";
const homeElements = new HomeElements();
const url = Cypress.config("baseUrl");

class HomePage {
  acessarSite() {
    cy.visit(url);
  }

  realizarPesquisa(pesquisa){
    cy.get(homeElements.campoDeBusca()).type(pesquisa);
    cy.get(homeElements.campoDeBusca()).type('{enter}');
    //cy.get(homeElements.botaoLupa()).click();
  }

  exibirResultadoBusca(resultado){
    cy.wait(2000);
    cy.contains(homeElements.resultadosEncontrados(resultado)).should('exist');
  }

  clicarImagemSpeakers(){
    cy.get(homeElements.imagemSpeakers()).click();
  }

  clicarBotaoByNow(){
    cy.get(homeElements.botaoByNow()).click();
  }
  
  clicarBotaoAddToCart(){
    cy.get(homeElements.botaoAddToCart()).click();
  }

  clicarBotaoCarrinho(){
    cy.get(homeElements.botaoCarrinho()).click();
    cy.wait(6000);
  }

  exibirProduto(produto){
    cy.contains(homeElements.produtosEncontrados(produto)).should('exist');
  }

  clicarBotaoCheckOut(){
    cy.get(homeElements.botaoCheckOut()).click();
  }

}

export default HomePage;