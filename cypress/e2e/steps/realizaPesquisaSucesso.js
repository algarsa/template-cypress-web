import HomePage from "../pageobjects/HomePage";
const { Given, When, Then, DataTable } = require("@badeball/cypress-cucumber-preprocessor");
const homePage = new HomePage;

/*Given("que acesso o site da Bradesco Seguros", () => {
    homePage.acessarSite();
});*/

When("pesquiso {} na opcao de pesquisa", (pesquisa) => {
    homePage.realizarPesquisa(pesquisa);
});

Then("os resultados da pesquisa sao exibidos", () => {
    homePage.exibirResultadoBusca();
});