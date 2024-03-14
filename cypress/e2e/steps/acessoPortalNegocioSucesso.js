import HomePage from "../pageobjects/HomePage";
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const homePage = new HomePage();

/*Given("que acesso o site da Bradesco Seguros", () => {
    homePage.acessarSite();
});*/

When("clico portal de negocios corretor", () => {
    homePage.clicarLinkPortalNegociosCorretor();
});

Then("deve carregar o portal de negocios", () => {
    homePage.verificarTituloPortalNegociosCorretor();
});