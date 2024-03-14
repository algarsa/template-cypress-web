/// <reference types="Cypress" />

import HomeElements from "../elements/HomeElements";
const homeElements = new HomeElements();
const url = Cypress.config("baseUrl");

class HomePage {
  acessarSite() {
    cy.visit(url);
  }

  clicarBotaoAceitarCookies(){
    cy.wait(2000);
    cy.get(homeElements.botaoAceitarCookies()).should('exist').click();
    cy.wait(2000);
  }

  ignorarBotaoAceitarCookiesNaoEncontrado(){
    cy.get(homeElements.botaoAceitarCookies()).should('not.exist');
  }

  clicarLinkPortalNegociosCorretor(){
    cy.get(homeElements.linkPortalNegociosCorretor()).first().click({ force: true });
  }

  verificarTituloPortalNegociosCorretor(){
    cy.get(homeElements.tituloPortalNegociosCorretor()).should('exist');
  }

  realizarPesquisa(pesquisa){
    cy.get(homeElements.botaoBuscar()).click();
    cy.get(homeElements.campoDeBusca()).type(pesquisa);
    cy.get(homeElements.botaoLupa()).click();
  }

  exibirResultadoBusca(){
    cy.get(homeElements.classeResultadosEncontrados()).should('exist');
  }

  clicarlinkContratacaoOnline(){
    cy.get(homeElements.linkContratacaoOnline()).first().click();
  }
  
}

export default HomePage;