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
beforeEach('the candidate status is Interview Scheduled', () => {
  //create candidate + shortlist + scheduled
  AddCandidateHelper.prepareCandidateForInterview().then(() => {
    AddCandidateHelper.checkApplicationStageStatus('Interview Scheduled');
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

When('the Admin changes the candidate status to {string}', (newStatus: string) => {
  CandidateFormHelper.changeCandidateStatus(newStatus)
});

Then('the candidate status should be updated to {string}', (expectedStatus: string) => {
  CandidateFormDialog.checkApplicationStageStatus(expectedStatus)
});

Then('the available actions buttons for should be Reject, Schedule Interview, Offer Job', () => {
  CandidateFormDialog.checkPassAvailableButtonActions()
});
Then('the available actions buttons for should be Reject', () => {
    CandidateFormDialog.checkFailAvailableButtonActions()
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

