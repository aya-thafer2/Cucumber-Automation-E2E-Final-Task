export const URLs = {
    loginPage: `/web/index.php/dashboard/index`,
    jobTitle: `/web/index.php/api/v2/admin/job-titles`,
    employee: `/web/index.php/api/v2/pim/employees`,
    vacancy: `/web/index.php/api/v2/recruitment/vacancies`,
    candidate: `/web/index.php/api/v2/recruitment/candidates`,
    shortlist: (candidateId: number) => { return `/web/index.php/api/v2/recruitment/candidates/${candidateId}/shortlist` },
    scheduleInterview: (candidateId: number) => { return `/web/index.php/api/v2/recruitment/candidates/${candidateId}/shedule-interview` },
};