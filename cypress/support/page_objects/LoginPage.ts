import BasePage from "./Base-PageObject";

class LoginPage extends BasePage {
    elementsLoginPage = {
        usernameInput: () => cy.get("input#Email"),
        passwordInput: () => cy.get("input#Password"),
        loginButton: () => cy.get("input#loginButton"),
        myAuthorizationBtn: () => cy.get("a.btn.btn-primary.btn-sm.authRefreshButton.authRefreshButtonMy"),
        loginerrorMessage: () => cy.get("div.text-danger.validation-summary-errorss"),
    };

    navigateToOpusLoginPage() {
        super.navigate(""); 
    }

    enterUsername(username: string) {
        this.elementsLoginPage.usernameInput().type(username);
    }   

    enterPassword(password: string) {  
        this.elementsLoginPage.passwordInput().type(password);
    }

    clickLoginButton() {
        this.elementsLoginPage.loginButton().click();
    }

    verifyLoginSuccess() {
        this.elementsLoginPage.myAuthorizationBtn().should("be.visible");
        this.elementsLoginPage.myAuthorizationBtn().should("exist");
    }

    
}
const loginPage = new LoginPage();
export default loginPage;
