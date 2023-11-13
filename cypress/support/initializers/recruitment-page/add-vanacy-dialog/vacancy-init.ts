import GenericHelper from "../../../helpers/common-helpers/generic-helpers/generic-helper";
import { ICreateAddCandidatePayload } from "../../../interfaces/apis/payload/recruitment-page/add-candidate-dialog/add-candidate-payload";
import moment from 'moment';
import { ICreateAddVacancyPayload } from "../../../interfaces/apis/payload/recruitment-page/add-vacancy-dialog/add-vacancy-payload";
import JobDialogHelper from "../../../helpers/admin-page/job-dialog/job-dialog-helper";
import AddEmployeeDialogHelper from "../../../helpers/PIM-page/add-employee-dialog/add-employee-dialog-helper";

export default class VacancyInit {
    private static Payload: ICreateAddVacancyPayload;

    static setPayload(Payload: ICreateAddVacancyPayload) {
        this.Payload = Payload;
    }
    static getPayload(): ICreateAddVacancyPayload {
        return this.Payload;

    }

    static initVacancy(): ICreateAddVacancyPayload {
        const Payload: ICreateAddVacancyPayload = {
            name: GenericHelper.genericRandomJobTitle(),
            jobTitleId: JobDialogHelper.getJobTitleId(),
            employeeId: AddEmployeeDialogHelper.getEmpNumber(),
            numOfPositions: null,
            description: GenericHelper.genericRandomSentence(),
            status: true,
            isPublished: true
        };
        return Payload;
    }
}