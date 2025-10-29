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

When('I click on the {string} link', (linkText: string) => {
    loginPage.clickForgotPasswordLink();
}); 

When('I enter an invalid username or password', () => {
    loginPage.enterInvalidCredentials('test@email.com');
});


Then('I should see an error message indicating {string}', (errorMessage: string) => {
    loginPage.verifyInvalidCredentialsErrorMessage(errorMessage);
    cy.screenshot('Invalid login attempt', { capture: 'runner' });
});


