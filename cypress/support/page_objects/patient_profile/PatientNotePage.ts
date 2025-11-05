import BasePage from "../Base-PageObject";  

class PatientNotePage extends BasePage {
    elementsPatientNotePage = {
        patientNotesTab: () => cy.get("a[href='#notes']").first(),
        addNoteButton: () => cy.get("//*[@id='#addNotesAction']"),
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
        this.elementsPatientNotePage.noteTextArea().type(note);
    }

    clickSaveNoteButton() {
        this.elementsPatientNotePage.saveNoteButton().click();
    }

    verifyNewlyAddedNoteWasAdded(expectedNote: string) {
        return this.elementsPatientNotePage.lstNoteDescriptions().first().then(($notes) => {
            const actualNote = $notes.text().trim();
            expect(actualNote).to.include(expectedNote);
        });
    }

}

const patientNotePage = new PatientNotePage();
export default patientNotePage;
