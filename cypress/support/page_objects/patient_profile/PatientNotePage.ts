/// <reference types="cypress-xpath" />
import BasePage from "../Base-PageObject";  

class PatientNotePage extends BasePage {
    elementsPatientNotePage = {
        patientNotesTab: () => cy.get("a[href='#notes']").first(),
        addNoteButton: () => cy.xpath("//*[@id='#addNotesAction']"),
        noteTextArea: () => cy.get("textarea[name='Note']"),
        saveNoteButton: () => cy.get("button#saveNotesButton"),
        lstNoteDescriptions: () => cy.get("div.note-description.text-break")    
    };

    clickPatientNotesTab() {
        this.elementsPatientNotePage.patientNotesTab().click();
    }

    clickAddNoteButton() {
        this.elementsPatientNotePage.addNoteButton().click();
    }

    enterNoteText(note: string) {
        this.elementsPatientNotePage.noteTextArea().type(note, { force: true });
    }

    clickSaveNoteButton() {
        this.elementsPatientNotePage.saveNoteButton().click({ force: true });
    }

    verifyNewlyAddedNoteWasAdded(expectedNote: string) {
        this.elementsPatientNotePage.lstNoteDescriptions().last().should('be.visible');
        return this.elementsPatientNotePage.lstNoteDescriptions().first().then(($notes) => {
            const actualNote = $notes.text().trim();
            expect(actualNote).equals(expectedNote);
        });
    }

}

const patientNotePage = new PatientNotePage();
export default patientNotePage;
