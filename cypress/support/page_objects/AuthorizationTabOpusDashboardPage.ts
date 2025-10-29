import BasePage from "./Base-PageObject";

class AuthorizationTabOpusDashboardPage extends BasePage {
    elementsAuthorizationTabOpusDashboardPage = {
        authorizationTab: () => cy.get("a[href='#transaction-details']"),
        myAuthorizationTab: () => cy.get("a.btn.btn-white.border.btn-sm.authRefreshButton.authRefreshButtonMy"),
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
}
const authorizationTabOpusDashboardPage = new AuthorizationTabOpusDashboardPage();
export default authorizationTabOpusDashboardPage;