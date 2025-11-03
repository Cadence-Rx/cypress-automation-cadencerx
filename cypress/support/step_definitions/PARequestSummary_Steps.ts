import { defineStep as And, Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import paRequestSummaryPage from "../page_objects/PARequestSummaryPage";

let obtainedMemberID: string;

Then('I am redirected to the PA Request Summary page with the Patient Demographics tab active', () => {
    cy.fixture('memberIDs').then(($memberIDData) => {
        obtainedMemberID = $memberIDData.memberID1;
        paRequestSummaryPage.verifyMemberIDInPARequestSummary(obtainedMemberID);
    });
    paRequestSummaryPage.verifyPatientTabDemographicsIsActive();
});