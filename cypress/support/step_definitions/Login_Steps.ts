import { defineStep as And, Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../page_objects/LoginPage";



Given('I navigate to the Opus application', () => {
    loginPage.navigateToOpusLoginPage();
});


When("I enter a valid username {string} and password {string}", (username: string, password: string) => {
    loginPage.enterUsername(username.trim());
    loginPage.enterPassword(password.trim());
});

And("I click on the login button", () => {
    loginPage.clickLoginButton();
});

Then("I should be successfully logged in and navigated to the Authorization tab of the OPUS Dashboard", () => {
    loginPage.verifyLoginSuccess();
});
