import BasePage from "./Base-PageObject";

class PatientTabOpusDashboardPage extends BasePage {
    elementsPatientTabOpusDashboardPage = {
        patientTab: () => cy.get("a[href='#patient-details']"),
        inputPatientSearch: () => cy.get("input#searchPatientsGrid_searchbar"),
        viewPatientButton: () => cy.get("a[href*='Patient']"),
        lstMemberIDs: () => cy.get("#searchPatientsGrid_content_table tbody tr td.e-rowcell"),
    };

    clickPatientTab() {
        return this.elementsPatientTabOpusDashboardPage.patientTab().click();
    }

    typePatientSearch(obtainedMemberID: string) {
        return this.elementsPatientTabOpusDashboardPage.inputPatientSearch().type(obtainedMemberID)
        .type('{enter}');

    }

    clickViewPatientButton() {
        return this.elementsPatientTabOpusDashboardPage.viewPatientButton()
        .invoke("removeAttr", "target").click();
    }

    verifyPatientListContainsMemberID(expectedMemberID: string) {
        return this.elementsPatientTabOpusDashboardPage.lstMemberIDs().eq(1).then(($cells) => {
            const actualMemberIDs: string = $cells.text().trim();
            expect(actualMemberIDs).to.equal(expectedMemberID);
        });
    }

}
const patientTabOpusDashboardPage = new PatientTabOpusDashboardPage();
export default patientTabOpusDashboardPage;