import VacancyInit from "../../../initializers/recruitment-page/add-vanacy-dialog/vacancy-init";
import CommonAPIHelper from "../../common-helpers/api-helpers/common-api-helper";
import { URLs } from "../../common-helpers/api-helpers/urls-helper";

export default class AddVacancyHelper {
    private static VacancyId: number;

    static setVacancyId(VacancyId:number){
        this.VacancyId = VacancyId;
    }
    static getVacancyId(): number {
        return this.VacancyId;
    }

    static addVacancy() {
        cy.addVacancy('POST', URLs.vacancy, VacancyInit.initVacancy()).then((response)=>{
            this.setVacancyId(response.data.id)
        })
    }
    static deleteVacancy() {
        CommonAPIHelper.delete(URLs.jobTitle, [this.getVacancyId()])
    }
}