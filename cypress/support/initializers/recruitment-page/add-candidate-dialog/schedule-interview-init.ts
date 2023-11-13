import AddEmployeeDialogHelper from "../../../helpers/PIM-page/add-employee-dialog/add-employee-dialog-helper";
import GenericHelper from "../../../helpers/common-helpers/generic-helpers/generic-helper";
import { ICreateScheduleInterviewPayload } from "../../../interfaces/apis/payload/recruitment-page/add-candidate-dialog/schedule-interview-payload";
import moment from "moment";

export default class ScheduleInterviewInit {
    private static Payload: ICreateScheduleInterviewPayload;

    static setPayload(Payload: ICreateScheduleInterviewPayload) {
        this.Payload = Payload;
    }

    static getPayload(): ICreateScheduleInterviewPayload {
        return this.Payload;

    }

    static initScheduleInterview() {
        const Payload: ICreateScheduleInterviewPayload = {
            interviewName: GenericHelper.genericRandomJobTitle(),
            interviewDate: GenericHelper.getRandomFutureDate(),
            interviewTime: GenericHelper.getRandomTime(),
            note: GenericHelper.genericRandomSentence(),
            interviewerEmpNumbers: [AddEmployeeDialogHelper.getEmpNumber()]
        };
        return Payload;
    }
}