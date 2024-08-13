import HomePage from "../pageobjects/HomePage";
const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const homePage = new HomePage;

When("seleciono e adiciono o produto no carrinho", () => {
    homePage.clicarImagemSpeakers();
    homePage.clicarBotaoByNow();
    homePage.clicarBotaoAddToCart();
});

Then("o produto {} deve ser adicionado ao carrinho", (produto) => {
    homePage.exibirProduto(produto);
    homePage.clicarBotaoCarrinho();
    homePage.exibirProduto(produto);
});