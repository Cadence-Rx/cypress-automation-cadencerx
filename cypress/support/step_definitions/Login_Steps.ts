import { defineStep as And, Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import Cypress from "cypress";  
import loginPage from "../page_objects/LoginPage";



Given('I navigate to the Opus application', () => {
    cy.visit("https://opus.cadencerx.com");
});


When("I enter a valid username {string} and password {string}", (username: string, password: string) => {
    loginPage.enterUsername(username.trim());
    loginPage.enterPassword(password.trim());
});

And("I click on the login button", () => {
    loginPage.clickLoginButton();
});

Then("I should be logged in successfully", () => {
    loginPage.verifyLoginSuccess();
});
