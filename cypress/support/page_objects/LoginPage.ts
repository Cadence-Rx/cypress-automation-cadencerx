import { data } from "cypress/types/jquery";
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
        let today: Date = new Date();
        let dateString: string = today.toDateString();
        let month: string  = dateString.split(" ")[1];
        let day: string = dateString.split(" ")[2];
        let pwd: string = "Cinnadust" + month + day + "@Anthony"; 
        this.elementsLoginPage.passwordInput().type(pwd);
    }

    clickLoginButton() {
        this.elementsLoginPage.loginButton().click();
    }

    verifyLoginSuccess() {
        this.elementsLoginPage.myAuthorizationBtn().should("be.visible");
        this.elementsLoginPage.myAuthorizationBtn().should("exist");
        this.elementsLoginPage.loginerrorMessage().should("not.exist");
    }

    
}
const loginPage = new LoginPage();
export default loginPage;
