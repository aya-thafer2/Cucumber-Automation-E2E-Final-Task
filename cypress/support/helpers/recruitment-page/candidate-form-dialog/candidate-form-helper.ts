import CandidateFormDialog from "../../../POM/recruitment-page/candidates-tab/candidate-form-dialog/candidate-form-dialog"
export default class CandidateFormHelper {

    static accessesCandidateForm() {
        CandidateFormDialog.goToRecruitmentPage();
        CandidateFormDialog.searchEmployeeName();
    }

    static changeCandidateStatus(status: string) {
        CandidateFormDialog.clickMarkInterviewBtn(status)
    }
}