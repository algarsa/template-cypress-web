import { Before, Given, AfterStep } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageobjects/HomePage";
import HomeElements from "../elements/HomeElements";

let startTime: any;
const homePage = new HomePage();
const homeElements = new HomeElements();

Before(() => {
  cy.task("prepareEnv");
  startTime = new Date().getTime();
});

Given("que acesso o site da Bradesco Seguros", () => {
  homePage.acessarSite();
   
  if(Cypress.env(homeElements.botaoAceitarCookies())){
    homePage.clicarBotaoAceitarCookies();
  }else{
    homePage.ignorarBotaoAceitarCookiesNaoEncontrado();
  }
});

AfterStep(() => {
  cy.screenshot(`${Cypress.spec.name}`);
  let pathFile = `${Cypress.config("projectRoot")}\\cypress\\reports\\screenshots\\${Cypress.spec.name}.png`;
  cy.readFile(`${pathFile}`, "base64").then((base64String) => {
    cy.task("stepImg", base64String);
  });
});

afterEach(function () {
  if (!Cypress.config("isInteractive")) {
    const testState = (window as any).testState as any;
    let result: any;
    let steps = testState.pickle.steps;
    const endTime = new Date().getTime();
    const durationInMilliseconds = endTime - startTime;
    const durationInSeconds = durationInMilliseconds / 1000;
    
    cy.screenshot(`${Cypress.spec.name}`);
    let pathFile = `${Cypress.config("projectRoot")}\\cypress\\reports\\screenshots\\${Cypress.spec.name}.png`;
    cy.readFile(`${pathFile}`, "base64").then((base64String) => {
      cy.task("stepImg", base64String);
    });

    cy.task("getStepImg").then((image: any) => {
      console.log(image.length);

      cy.task("getEvidence").then((img: any) => {
        img = image;
        result = {
          nomeCenario: this.currentTest?.title,
          tempoExecucao: durationInSeconds,
          status: this.currentTest?.state,
          steps: steps,
          nomeFile: Cypress.spec.name,
          evidencia: img,
        };
        
        cy.task("gerarPdfResult", result);
      });
    });
  }
});
