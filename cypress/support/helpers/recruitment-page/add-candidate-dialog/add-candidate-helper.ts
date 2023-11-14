import CandidateFormDialog from "../../../POM/recruitment-page/candidates-tab/candidate-form-dialog/candidate-form-dialog";
import AddCandidateInit from "../../../initializers/recruitment-page/add-candidate-dialog/add-candidate-init";
import ScheduleInterviewInit from "../../../initializers/recruitment-page/add-candidate-dialog/schedule-interview-init";
import CommonAPIHelper from "../../common-helpers/api-helpers/common-api-helper";
import { URLs } from "../../common-helpers/api-helpers/urls-helper";
import CandidateFormHelper from "../candidate-form-dialog/candidate-form-helper";

export default class AddCandidateHelper {

    private static CandidateId: number;
    private static CandidateFullName: string;
    private static CandidateFirstName: string;
    private static InterviewId: number;

    static setCandidateId(CandidateId: number) {
        this.CandidateId = CandidateId;
    }
    static getCandidateId(): number {
        return this.CandidateId;
    }
    static setInterviewId(InterviewId: number) {
        this.InterviewId = InterviewId;
    }
    static getInterviewId(): number {
        return this.InterviewId;
    }
    static setCandidateFullName(CandidateFullName: string) {
        this.CandidateFullName = CandidateFullName;
    }
    static getCandidateFullName(): string {
        return this.CandidateFullName;
    }
    static setCandidateFirstName(CandidateFirstName: string) {
        this.CandidateFirstName = CandidateFirstName;
    }
    static getCandidateFirstName(): string {
        return this.CandidateFirstName;
    }

    static addCandidate(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            cy.createCandidate('POST', URLs.candidate, AddCandidateInit.initCandidate()).then((response) => {
                this.setCandidateId(response.data.id)
                this.setCandidateFullName(response.data.firstName + ' ' + response.data.middleName + ' ' + response.data.lastName)
                this.setCandidateFirstName(response.data.firstName)
            })
        })
    }
    static shortlistCandidate(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            const Payload = { note: null }
            cy.shortlistCandidate('PUT', URLs.shortlist(this.CandidateId), Payload)
        })
    }
    static scheduleInterview() {
        cy.scheduleInterview('POST', URLs.scheduleInterview(this.CandidateId), ScheduleInterviewInit.initScheduleInterview())
            .then((response) => {
                this.setInterviewId(response.data.id);
            })
    }
    static markInterviewPassed(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            const Payload = { note: null }
            cy.markInterviewPassed('PUT', URLs.markInterviewPassed(this.CandidateId,this.getInterviewId()), Payload)
        })
    }
    static offerJob(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            const Payload = { note: null }
            cy.offerJob('PUT', URLs.offerJob(this.CandidateId), Payload)
        })
    }
    static hire(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            const Payload = { note: null }
            cy.hire('PUT', URLs.hire(this.CandidateId), Payload)
        })
    }
    static checkApplicationStageStatus(status: string) {
        cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${AddCandidateHelper.getCandidateId()}`)
        cy.get('.orangehrm-recruitment-status').should('contain', status)
    }
    static prepareCandidateForInterview(): Cypress.Chainable<any> {
        //create candidate + shortlist + scheduled
        return cy.wrap(undefined).then(() => {
            this.addCandidate().then(() => {
                this.shortlistCandidate().then(() => {
                    this.scheduleInterview();
                })
            })
        })
    }
    
    static hireCandidate(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            //mark interview passed+ offer job + hire
            this.markInterviewPassed().then(() => {
                this.offerJob().then(() => {
                    this.hire();
                })
            })
        })
    }
    static deleteCandidate() {
        CommonAPIHelper.delete(URLs.candidate, [this.getCandidateId()])
    }
}