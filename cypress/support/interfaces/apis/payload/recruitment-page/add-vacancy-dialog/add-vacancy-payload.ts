export interface ICreateAddVacancyPayload {
    name:           string;
    jobTitleId:     number;
    employeeId:     number;
    numOfPositions: null;
    description:    string;
    status:         boolean;
    isPublished:    boolean;
}
