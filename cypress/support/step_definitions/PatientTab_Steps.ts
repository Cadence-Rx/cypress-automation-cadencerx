import { defineStep as And, Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import patientTabOpusDashboardPage from "../page_objects/PatientTabOpusDashboardPage";

let obtainedMemberID: string;

When('I click on the Patient tab of the OPUS Dashboard', () => {
    patientTabOpusDashboardPage.clickPatientTab();

});

And('I enter Member ID obtained in the search field', () => {
    cy.fixture('memberIDs').then(($memberIDData) => {
        obtainedMemberID = $memberIDData.memberID1;
        patientTabOpusDashboardPage.typePatientSearch(obtainedMemberID);
    });
});

Then('I should see a list of patients with matching Member ID', () => {
    patientTabOpusDashboardPage.verifyPatientListContainsMemberID(obtainedMemberID);
});

When('I click on the view Patient button', () => {
    patientTabOpusDashboardPage.clickViewPatientButton();
});
