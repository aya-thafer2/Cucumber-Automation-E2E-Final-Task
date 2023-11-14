
import GenericHelper from "../../../../helpers/common-helpers/generic-helpers/generic-helper";
import AddCandidateHelper from "../../../../helpers/recruitment-page/add-candidate-dialog/add-candidate-helper";

export default class CandidateFormDialog {

    static elements = {
        Btns: () => cy.get('button'),
        inputFields: () => cy.get('.oxd-input-group'),
        mainMenuItems: () => cy.get('.oxd-sidepanel-body'),


    }
    static goToRecruitmentPage() {
        this.elements.mainMenuItems().contains('Recruitment').click();
    }
    static searchEmployeeName() {
        const CandidateFullName = AddCandidateHelper.getCandidateFullName();
        const CandidateFirstName = AddCandidateHelper.getCandidateFirstName();
        this.elements.inputFields()
            .contains('Candidate Name')
            .getByPlaceholder('Type for hints...')
            .eq(0)
            .type(CandidateFirstName)

        cy.get('.oxd-autocomplete-dropdown')
            .children()
            .contains(CandidateFullName)
            .click()

        this.clickSearch()
        this.clickViewDetails();
    }
    static clickSearch() {
        this.elements.Btns().contains('Search').click({ force: true });
    }
    static clickViewDetails() {
        cy.get('.oxd-icon-button i.bi-eye-fill').click({ force: true });
    }

    static clickMarkInterviewBtn(status: string) {
        this.elements.Btns().contains('Mark ' + status).click({ force: true })
        this.clickSave();
    }
    static clickSave() {
        this.elements.Btns().contains('Save').click()
    }

    static checkApplicationStageStatus(status: string) {
        cy.get('.orangehrm-recruitment-status').should('contain', status)
    }

    static checkPassAvailableButtonActions() {
        cy.get('.orangehrm-recruitment-actions').should(($container) => {
            expect($container).to.contain('Reject');
            expect($container).to.contain('Schedule Interview');
            expect($container).to.contain('Offer Job');
        });
    }
    static checkFailAvailableButtonActions() {
        cy.get('.orangehrm-recruitment-actions').should(($container) => {
            expect($container).to.contain('Reject');
        });
    }
}