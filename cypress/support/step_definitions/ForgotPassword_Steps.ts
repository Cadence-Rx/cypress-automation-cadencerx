import { defineStep as And, Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import forgotPasswordPage from "../page_objects/ForgotPasswordPage";


Then('I should be navigated to the password recovery page', () => {
    forgotPasswordPage.verifyForgotPasswordPageHeader();
    cy.screenshot('Forgot_Password_Page', { capture: 'fullPage' });
});


Then('I should be able to enter in my email address to reset password', () => {
    forgotPasswordPage.verifyEmailInput('test@email.com');
    forgotPasswordPage.verifyEmailLinkButton("Email Link");
    cy.screenshot('Forgot_Password_Email_Entry', { capture: 'fullPage' });
});
