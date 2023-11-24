
import EmployeeInit from "../../../initializers/PIM-page/add-employee-dialog/employee-init";
import CommonAPIHelper from "../../common-helpers/api-helpers/common-api-helper";
import { URLs } from "../../common-helpers/api-helpers/urls-helper";
import GenericHelper from "../../common-helpers/generic-helpers/generic-helper";

export default class AddEmployeeDialogHelper {

    private static EmpNumber: number;
    private static EmpFirstName: string;
    private static EmpMiddleName: string;
    private static EmpLastName: string;
    private static EmpFullName: string;

    static setEmpNumber(EmpNumber: number) {
        this.EmpNumber = EmpNumber;
    }
    static getEmpNumber(): number {
        return this.EmpNumber;
    }
    static setEmpFullName(EmpFullName: string) {
        this.EmpFullName = EmpFullName;
    }
    static getEmpFullName(): string {
        return this.EmpFullName
    }
    static setEmpMiddleName(EmpMiddleName: string) {
        this.EmpMiddleName = EmpMiddleName;
    }
    static getEmpMiddleName(): string {
        return this.EmpMiddleName
    }
    static setEmpFirstName(EmpFirstName: string) {
        this.EmpFirstName = EmpFirstName;
    }
    static getEmpFirstName(): string {
        return this.EmpFirstName
    }
    static setEmpLastName(EmpLastName: string) {
        this.EmpLastName = EmpLastName;
    }
    static getEmpLastName(): string {
        return this.EmpLastName
    }

    static addNewEmployee(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            cy.addEmployee('POST', URLs.employee, EmployeeInit.initEmployee()).then((response) => {
                this.setEmpFirstName(response.data.firstName)
                this.setEmpMiddleName(response.data.middleName);
                this.setEmpLastName(response.data.lastName);
                this.setEmpNumber(response.data.empNumber);
                this.setEmpFullName(response.data.firstName+' '+response.data.middleName+' '+response.data.lastName)
            })
        });
    }
    static logout() {
        cy.logout();
    }
    static deleteEmployee() {
        const empNum = this.getEmpNumber();
        CommonAPIHelper.delete(URLs.employee, [empNum])
    }

}