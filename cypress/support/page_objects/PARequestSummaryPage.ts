import BasePage from "./Base-PageObject";

class PARequestSummaryPage extends BasePage {
    elementsPARequestSummaryPage = {
        patientMemberID: () => cy.get("span.patient-numberd"),
        patientTabDemographics: () => cy.get("a[href='#patient-details-panel']"),
        paRequestSummaryHeader: () => cy.get("div.summary > strong"),
    };

    verifyMemberIDInPARequestSummary(expectedMemberID: string) {
        return this.elementsPARequestSummaryPage.patientMemberID().then(($ID) => {
            const actualMemberID = $ID.text().split('ID')[1].trim();
            expect(actualMemberID).to.equal(expectedMemberID);
        });
    }

    verifyPatientTabDemographicsIsActive() {
        return this.elementsPARequestSummaryPage.patientTabDemographics().should('have.class', 'active');
    }

    verifyPARequestSummaryHeader() {
        return this.elementsPARequestSummaryPage.paRequestSummaryHeader().then(($header) => {
            const headerText = $header.text().trim();
            expect(headerText).to.equal("PA Request Summary");
        });
    }
}
const paRequestSummaryPage = new PARequestSummaryPage();
export default paRequestSummaryPage;
