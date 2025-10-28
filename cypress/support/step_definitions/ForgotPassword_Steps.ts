import { defineStep as And, Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import forgotPasswordPage from "../page_objects/ForgotPasswordPage";
import { faker } from '@faker-js/faker';


Then('I should be navigated to the password recovery page', async () => {
    forgotPasswordPage.verifyForgotPasswordPageHeader();
});


Then('I should be able to enter in my email address to reset password', async () => {
    const testEmail = faker.internet.email();
    forgotPasswordPage.verifyEmailInput(testEmail);
    forgotPasswordPage.verifyEmailLinkButton("Email Link");
});
