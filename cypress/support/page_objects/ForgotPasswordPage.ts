import BasePage from "./Base-PageObject";

class ForgotPasswordPage extends BasePage {
    elementsForgotPasswordPage = {
        forgotPasswordPageHeader: () => cy.get("h4"),    
        emailInput: () => cy.get("input#Email"),
        emailButton: () => cy.get("input[type='submit']"),
        confirmationMessage: () => cy.get("div.result"),
    };

}


const forgotPasswordPage = new ForgotPasswordPage();
export default forgotPasswordPage;