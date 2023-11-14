import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AddEmployeeDialogHelper from '../../../support/helpers/PIM-page/add-employee-dialog/add-employee-dialog-helper';
import GenericHelper from '../../../support/helpers/common-helpers/generic-helpers/generic-helper';
import JobDialogHelper from '../../../support/helpers/admin-page/job-dialog/job-dialog-helper';
import AddVacancyHelper from '../../../support/helpers/recruitment-page/add-vacancy-dialog/add-vacancy-helper';
import AddCandidateHelper from '../../../support/helpers/recruitment-page/add-candidate-dialog/add-candidate-helper';
import CandidateFormHelper from '../../../support/helpers/recruitment-page/candidate-form-dialog/candidate-form-helper';
import CandidateFormDialog from '../../../support/POM/recruitment-page/candidates-tab/candidate-form-dialog/candidate-form-dialog';


beforeEach('the Employee, Job Title and Vacancy are created', () => {
  //Admin login 
  GenericHelper.adminLogin()
  //Add new Employee
  AddEmployeeDialogHelper.addNewEmployee();
  //Create Job Title
  JobDialogHelper.createJobTitle().then(() => {
    //Create Vacancy
    AddVacancyHelper.addVacancy();
  })
});
beforeEach('the candidate status is Application Initiated', () => {
  //create candidate
  AddCandidateHelper.addCandidate().then(() => {
    AddCandidateHelper.checkApplicationStageStatus('Application Initiated');
  })
  AddEmployeeDialogHelper.logout();
})
Given('the candidate status is Hired', () => {
  //hire candidate
  AddCandidateHelper.hireCandidate().then(() => {
    AddCandidateHelper.checkApplicationStageStatus('Hired');
  })
  AddEmployeeDialogHelper.logout();
});

When('the Admin logs in to the system', () => {
  GenericHelper.adminLogin()
});

When('the Admin accesses the candidate form', () => {
  CandidateFormHelper.accessesCandidateForm()
  CandidateFormDialog.clickViewDetails();
});

When("the Admin enables Edit candidate switch", () => {
  CandidateFormDialog.clickEnableSwitch();
});

When("the Admin Uploads a txt file to the Resume section and Saves the form", () => {
  CandidateFormDialog.uploadFile();
});

When("the Admin Downloads the uploaded file", () => {
  CandidateFormHelper.accessesCandidateForm();
  CandidateFormDialog.clickDownloadBtn();
});

Then("the downloaded file content should match the uploaded data", () => {
  CandidateFormHelper.verifyFileContent();
});

afterEach(() => {
  //delete employee
  AddEmployeeDialogHelper.deleteEmployee()
  //delete job title
  JobDialogHelper.deleteJobTitle();
  //delete vacancy
  AddVacancyHelper.deleteVacancy();
  //delete candidate
  AddCandidateHelper.deleteCandidate();
});

