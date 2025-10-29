import { defineStep as And, Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import authorizationTabOpusDashboardPage from "../page_objects/AuthorizationTabOpusDashboardPage";



Then("I should be successfully logged in and navigated to the Authorization tab of the OPUS Dashboard", () => {
    // loginPage.verifyLoginSuccess();
    authorizationTabOpusDashboardPage.verifyAuthorizationTabIsActive();
    authorizationTabOpusDashboardPage.verifyMyAuthorizationTabIsVisible();
    cy.screenshot('Login_Successful', { capture: 'runner' });
});