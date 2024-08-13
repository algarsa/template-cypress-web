import HomePage from "../pageobjects/HomePage";
const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const homePage = new HomePage;

When("seleciono e adiciono um produto no carrinho", () => {
    homePage.clicarImagemSpeakers();
    homePage.clicarBotaoByNow();
    homePage.clicarBotaoAddToCart();
    homePage.clicarBotaoCarrinho();
});

When("clico no botão ‘CHECKOUT’", () => {
    homePage.clicarBotaoCheckOut();
});

Then("o produto {} deve ser exibido", (produto) => {
    homePage.exibirProduto(produto);
});