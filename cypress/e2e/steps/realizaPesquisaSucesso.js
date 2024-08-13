import HomePage from "../pageobjects/HomePage";
const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const homePage = new HomePage;

When("pesquiso {} na opcao de pesquisa", (pesquisa) => {
    homePage.realizarPesquisa(pesquisa);
});

Then("os resultados {} da pesquisa sao exibidos", (resultado) => {
    homePage.exibirResultadoBusca(resultado);
});