import BasePage from "./Base-PageObject";

class PARequestSummaryPage extends BasePage {
    elementsPARequestSummaryPage = {
        patientMemberID: () => cy.get("span.patient-numberd"),
        patientTabDemographics: () => cy.get("a[href='#patient-details-panel']"),
    };

    verifyMemberIDInPARequestSummary(expectedMemberID: string) {
        return this.elementsPARequestSummaryPage.patientMemberID().then(($ID) => {
            const actualMemberID = $ID.text().trim();
            expect(actualMemberID).to.equal(expectedMemberID);
        });
    }

    verifyPatientTabDemographicsIsActive() {
        return this.elementsPARequestSummaryPage.patientTabDemographics().should('have.class', 'active');
    }
}
const paRequestSummaryPage = new PARequestSummaryPage();
export default paRequestSummaryPage;
