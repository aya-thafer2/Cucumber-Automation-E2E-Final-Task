import { ICreateAddEmployeePayload } from "../interfaces/apis/payload/PIM-page/add-employee-dialog/add-employee-payload";
import { ICreateCommonDeletePayload } from "../interfaces/apis/payload/common-payload/delete-payload";
import { ICreateAddCandidatePayload } from "../interfaces/apis/payload/recruitment-page/add-candidate-dialog/add-candidate-payload";
import { ICreateScheduleInterviewPayload } from "../interfaces/apis/payload/recruitment-page/add-candidate-dialog/schedule-interview-payload";
import { ICreateAddVacancyPayload } from "../interfaces/apis/payload/recruitment-page/add-vacancy-dialog/add-vacancy-payload";
import { ICreateAddEmployeeResponse } from "../interfaces/apis/response/PIM-page/add-employee-dialog/add-employee-response";
import { ICreateJobResponse } from "../interfaces/apis/response/admin-page/job-dialog/job-response";
import { ICreateCommonDeleteResponse } from "../interfaces/apis/response/common-response/delete-response";
import { ICreateAddCandidateResponse } from "../interfaces/apis/response/recruitment-page/add-candidate-dialog/add-candidate-response";
import { ICreateHireResponse } from "../interfaces/apis/response/recruitment-page/add-candidate-dialog/hire-response";
import { ICreateMarkInterviewPassedResponse } from "../interfaces/apis/response/recruitment-page/add-candidate-dialog/mark-interview-passed-response";
import { ICreateOfferJobResponse } from "../interfaces/apis/response/recruitment-page/add-candidate-dialog/offer-job-response";
import { ICreateScheduleInterviewResponse } from "../interfaces/apis/response/recruitment-page/add-candidate-dialog/schedule-interview-response";
import { ICreateShortlistResponse } from "../interfaces/apis/response/recruitment-page/add-candidate-dialog/shortlist-reponse";
import { ICreateAddVacancyResponse } from "../interfaces/apis/response/recruitment-page/add-vacancy-dialog/add-vacancy-response";

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            addEmployee: (method: string, url: string, payload: ICreateAddEmployeePayload) => Chainable<ICreateAddEmployeeResponse>;    
            delete: (method: string, url: string, payload: ICreateCommonDeletePayload) => Chainable<ICreateCommonDeleteResponse>;
            createJobTitle: (method: string, url: string, payload: Promise<ICreateJobResponse>) => Chainable<ICreateJobResponse>;
            addVacancy: (method: string, url: string, payload: ICreateAddVacancyPayload) => Chainable<ICreateAddVacancyResponse>;
            createCandidate: (method: string, url: string, payload: ICreateAddCandidatePayload) => Chainable<ICreateAddCandidateResponse>;
            shortlistCandidate: (method: string, url: string, payload: any) => Chainable<ICreateShortlistResponse>;
            scheduleInterview: (method: string, url: string, payload: ICreateScheduleInterviewPayload) => Chainable<ICreateScheduleInterviewResponse>;
            markInterviewPassed: (method: string, url: string, payload: any) => Chainable<ICreateMarkInterviewPassedResponse>;
            offerJob: (method: string, url: string, payload: any) => Chainable<ICreateOfferJobResponse>;
            hire: (method: string, url: string, payload: any) => Chainable<ICreateHireResponse>;

        }
    }
}

const apiRequest = (method: string, url: string, payload?: any) => {
    return cy.api({ method, url, body: payload })
        .then((response) => {
            return response;
        })
        .its('body');
}

Cypress.Commands.add('addEmployee', apiRequest);
Cypress.Commands.add('delete', apiRequest);
Cypress.Commands.add('createJobTitle', apiRequest)
Cypress.Commands.add('addVacancy', apiRequest)
Cypress.Commands.add('createCandidate', apiRequest)
Cypress.Commands.add('shortlistCandidate', apiRequest)
Cypress.Commands.add('scheduleInterview', apiRequest)
Cypress.Commands.add('markInterviewPassed', apiRequest)
Cypress.Commands.add('offerJob', apiRequest)
Cypress.Commands.add('hire', apiRequest)




