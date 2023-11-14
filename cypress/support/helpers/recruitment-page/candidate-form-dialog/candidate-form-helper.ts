import CandidateFormDialog from "../../../POM/recruitment-page/candidates-tab/candidate-form-dialog/candidate-form-dialog"
export default class CandidateFormHelper {

    static accessesCandidateForm() {
        CandidateFormDialog.goToRecruitmentPage();
        CandidateFormDialog.searchEmployeeName();
    }

    static changeCandidateStatus(status: string) {
        CandidateFormDialog.clickMarkInterviewBtn(status)
    }
    static verifyFileContent() {
        const downloadedFilePath = 'cypress/downloads/resume.txt';
        cy.fixture('candidate/resume.txt').then((actualFile) => {
            cy.readFile(downloadedFilePath).then((downloadedFile) => {
                expect(downloadedFile).to.equal(actualFile);
            });
        });
    }
}