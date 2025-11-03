import { defineStep as And, Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import authorizationTabOpusDashboardPage from "../page_objects/AuthorizationTabOpusDashboardPage";

beforeEach(() => {
    cy.intercept('https://opus-uat.cadencerx.com/Portal/PriorAuthorizations?filterContactId=-1&offset=300')
    .as('getAuthorizations');
});

Then("I should be successfully logged in and navigated to the Authorization tab of the OPUS Dashboard", () => {
    // loginPage.verifyLoginSuccess();
    authorizationTabOpusDashboardPage.verifyAuthorizationTabIsActive();
    authorizationTabOpusDashboardPage.verifyMyAuthorizationTabIsVisible();
    cy.screenshot('Login_Successful', { capture: 'runner' });
});


And('I click the All Tab on the OPUS Dashboard', () => {
    authorizationTabOpusDashboardPage.clickAllTab();
}); 

And('I select {string} from the Column chooser dropdown', (columnName: string) => {
    cy.wait('@getAuthorizations');
    authorizationTabOpusDashboardPage.selectMemberIDFromColumnChooser(columnName);
}); 

And('I obtain Member ID from Authorization tab of the OPUS Dashboard', () => {
    authorizationTabOpusDashboardPage.obtainMemberIDs().then((memberIDs) => {
        cy.log('Obtained Member IDs:', memberIDs);
    });
}); 