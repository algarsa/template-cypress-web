import { Given } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageobjects/HomePage";

const homePage = new HomePage();

Given("que acesso o site da Advantageonlineshopping", () => {
  homePage.acessarSite();
});
