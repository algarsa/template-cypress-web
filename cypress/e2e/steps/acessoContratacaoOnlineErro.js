import HomePage from "../pageobjects/HomePage";
const { Given, When, Then, DataTable } = require("@badeball/cypress-cucumber-preprocessor");
const homePage = new HomePage;

/*Given("que acesso o site da Bradesco Seguros", () => {
    homePage.acessarSite();
});*/

When("acesso contratacao online", () => {
    homePage.clicarlinkContratacaoOnline();
});

Then("deve aparecer label contratacao online", () => {
    homePage.exibirResultadoBusca(); // para dar erro
});