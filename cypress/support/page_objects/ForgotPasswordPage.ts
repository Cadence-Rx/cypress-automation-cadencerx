import BasePage from "./Base-PageObject";

class ForgotPasswordPage extends BasePage {
    elementsForgotPasswordPage = {
        forgotPasswordPageHeader: () => cy.get("h4"),    
        emailInput: () => cy.get("input#Email"),
        emailButton: () => cy.get("input[type='submit']"),
        confirmationMessage: () => cy.get("div.result"),
    };

    verifyForgotPasswordPageHeader() {
        this.elementsForgotPasswordPage.forgotPasswordPageHeader().should("be.visible");
        // this.elementsForgotPasswordPage.forgotPasswordPageHeader().should("have.text", "Reset password");
        return this.elementsForgotPasswordPage.forgotPasswordPageHeader().then(($header) => {
            const actualHeaderText = $header.text().trim();
            expect(actualHeaderText).to.equal("Enter your email.");
        });
    }

    verifyEmailInput(email: string) {
        // this.elementsForgotPasswordPage.emailInput().should("be.visible");
        this.elementsForgotPasswordPage.emailInput().type(email);
        this.elementsForgotPasswordPage.emailInput().should("have.value", email);
        this.elementsForgotPasswordPage.emailInput().invoke('val').then((inputValue) => {
            expect(inputValue).to.equal(email);
        });
    }

    verifyEmailLinkButton(buttonText: string) {
        this.elementsForgotPasswordPage.emailButton().should("be.visible");
        this.elementsForgotPasswordPage.emailButton().should("have.value", buttonText);
    }
}


const forgotPasswordPage = new ForgotPasswordPage();
export default forgotPasswordPage;