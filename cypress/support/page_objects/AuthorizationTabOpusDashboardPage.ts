import BasePage from "./Base-PageObject";

class AuthorizationTabOpusDashboardPage extends BasePage {
    elementsAuthorizationTabOpusDashboardPage = {
        authorizationTab: () => cy.get("a[href='#transaction-details']"),
        myAuthorizationTab: () => cy.get("a.btn.btn-primary.btn-sm.authRefreshButton.authRefreshButtonMy"),
        allTab: () => cy.get("a.btn.btn-white.border.btn-sm.authRefreshButton.authRefreshButtonAll"),
        columnButton: () => cy.get("button#priorAuthGrid_columnchooser"),
        lstMemeberIDs: () => cy.get("td.e-rowcell"),
        lstColumnChooserOptions: () => cy.get("span.e-label"),
    };

    verifyAuthorizationTabIsActive() {
        this.elementsAuthorizationTabOpusDashboardPage.authorizationTab().should("have.class", "active");
        return this.elementsAuthorizationTabOpusDashboardPage.authorizationTab().then(($tab) => {
            const tabTitle = $tab.text().trim();
            expect(tabTitle).to.equal("Authorizations");
        });
    }

    verifyMyAuthorizationTabIsVisible() {
        this.elementsAuthorizationTabOpusDashboardPage.myAuthorizationTab().should("be.visible");
        return this.elementsAuthorizationTabOpusDashboardPage.myAuthorizationTab().then(($btn) => {
            const btnText = $btn.text().trim();
            expect(btnText).to.equal("My Authorizations");
        });
    }

    clickAllTab() {
        this.elementsAuthorizationTabOpusDashboardPage.allTab().click();
    }

    selectMemberIDFromColumnChooser(columnName: string) {
        this.elementsAuthorizationTabOpusDashboardPage.columnButton().click();
        this.elementsAuthorizationTabOpusDashboardPage.lstColumnChooserOptions()
            .contains(columnName)
            .then(($checkbox) => {
                if (!$checkbox.is(':checked')) {
                    cy.wrap($checkbox).click();
                }
            });
    }

    obtainMemberIDs(): Cypress.Chainable<string[]> {
        let lastNumber: number = 5 - 15;
        function getRandomArithmetic(limit: number): number {
        const start = 5;
        const increment = 15;
        const possibleNumbers: number[] = [];

        // Populate the array with numbers in the sequence.
        for (let n = start; n <= limit; n += increment) {
            possibleNumbers.push(n);
        }

        if (possibleNumbers.length === 0) {
            throw new Error("No numbers found within the specified limit.");
        }

        // Get a random index within the bounds of the array.
        const randomIndex = Math.floor(Math.random() * possibleNumbers.length);

        // Return the number at the random index.
        return possibleNumbers[randomIndex];
        }

        // Get a random number from the sequence, up to a limit of 150.
        // The possible numbers are 5, 20, 35, 50, 65, 80, 95.
        const randomNumber = getRandomArithmetic(150);
        console.log(`randomNumber: ${randomNumber}`); // e.g., 5, 20,

        const obtainedMemberID: string[] = [];
        this.elementsAuthorizationTabOpusDashboardPage.lstMemeberIDs().eq(randomNumber).then(($el) => {
            const memberID = $el.text().trim();
            obtainedMemberID.push(memberID);
            console.log(`Obtained Member ID: ${memberID}`);
        });
        // this.elementsAuthorizationTabOpusDashboardPage.lstMemeberIDs().each(($el) => {
            // obtainedMemberID.push($el.text().trim());
        // });
        cy.readFile('cypress/fixtures/memberIDs.json').then(($memberIDs) => {
            $memberIDs.memberID1 = obtainedMemberID[0] || "";
            $memberIDs.memberID2 = obtainedMemberID[1] || "";
            cy.writeFile('cypress/fixtures/memberIDs.json', $memberIDs);
        });
        return cy.wrap(obtainedMemberID);
    }

}
const authorizationTabOpusDashboardPage = new AuthorizationTabOpusDashboardPage();
export default authorizationTabOpusDashboardPage;