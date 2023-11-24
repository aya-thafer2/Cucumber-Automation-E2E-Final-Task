import GenericHelper from "../../../helpers/common-helpers/generic-helpers/generic-helper";
import { ICreateJobPayload } from "../../../interfaces/apis/payload/admin-page/job-dialog/job-payload";

export default class JobTitleInit {
    private static Payload: ICreateJobPayload;
    private static JobTitle: string;

    static setPayload(Payload: ICreateJobPayload) {
        this.Payload = Payload;
    }

    static getPayload(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            return this.Payload;
        });
    }
    static setJobTitle(JobTitle: string) {
        this.JobTitle = JobTitle;
    }

    static getJobTitle(): string {
        return this.JobTitle;
    }

    static initJobTitle(): Cypress.Chainable<any> {
        let RandomJobTitle =GenericHelper.genericRandomJobTitle();
        this.setJobTitle(RandomJobTitle);
            const JobTitlePayload: ICreateJobPayload = {
                title: RandomJobTitle,
                description: GenericHelper.genericRandomSentence(),
                specification: null,
                note: GenericHelper.genericRandomSentence(),
            };
            this.setPayload(JobTitlePayload);
        return this.getPayload();
    }
}