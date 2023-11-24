import GenericHelper from "../../../helpers/common-helpers/generic-helpers/generic-helper";
import AddVacancyHelper from "../../../helpers/recruitment-page/add-vacancy-dialog/add-vacancy-helper";
import { ICreateAddCandidatePayload } from "../../../interfaces/apis/payload/recruitment-page/add-candidate-dialog/add-candidate-payload";
import moment from 'moment';

export default class AddCandidateInit {
    private static Payload: ICreateAddCandidatePayload;

    static setPayload(Payload: ICreateAddCandidatePayload) {
        this.Payload = Payload;
    }
    static getPayload(): ICreateAddCandidatePayload {
        return this.Payload;

    }

    static initCandidate(): ICreateAddCandidatePayload {
        const Payload: ICreateAddCandidatePayload = {
            firstName: GenericHelper.genericRandomFirstName(),
            middleName: GenericHelper.genericRandomMiddleName(),
            lastName: GenericHelper.genericRandomLastName(),
            email: GenericHelper.genericRandomEmail(),
            contactNumber: null,
            keywords: null,
            comment: GenericHelper.genericRandomSentence(),
            dateOfApplication: moment().format('YYYY-MM-DD').toString(),
            consentToKeepData: false,
            vacancyId: AddVacancyHelper.getVacancyId()
        };
        return Payload;
    }
}