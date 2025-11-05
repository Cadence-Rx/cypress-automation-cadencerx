import { defineStep as And, Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import paRequestSummaryPage from "../page_objects/PARequestSummaryPage";

let obtainedMemberID: string;

Then('I am redirected to the PA Request Summary page with the Patient Demographics tab active', () => {
    cy.fixture('memberIDs').then(($memberIDData) => {
        obtainedMemberID = $memberIDData.memberID1;
        paRequestSummaryPage.verifyMemberIDInPARequestSummary(obtainedMemberID);
    });
    paRequestSummaryPage.verifyPatientTabDemographicsIsActive();
    cy.screenshot('PA_Request_Summary_Page', { capture: 'runner' });
});

Then('I am redirected to the PA {string} page for that Pending Authorization', (summary: string) => {
    cy.wait(1000);
    paRequestSummaryPage.verifyPARequestSummaryHeader(summary);
});