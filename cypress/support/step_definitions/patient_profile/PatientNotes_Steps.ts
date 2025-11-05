import { defineStep as And, Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import patientNotePage from "../../page_objects/patient_profile/PatientNotePage";

When('I click on the Patient Notes tab', () => {
    patientNotePage.clickPatientNotesTab();
});

And('I click on the Add Note button', () => {
    patientNotePage.clickAddNoteButton();
});

And('I enter a note in the note text area "Entering a test note for automation"', () => {
    patientNotePage.enterNoteText("Entering a test note for automation");
});

And('I click on the Save Note button', () => {
    patientNotePage.clickSaveNoteButton();
});

Then('I should see the newly added note in the Patient Notes tab', () => {
    
});