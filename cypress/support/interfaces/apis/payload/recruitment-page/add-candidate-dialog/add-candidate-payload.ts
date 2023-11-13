export interface ICreateAddCandidatePayload {
    firstName:         string;
    middleName:        string;
    lastName:          string;
    email:             string;
    contactNumber:     null;
    keywords:          null;
    comment:           null;
    dateOfApplication: string;
    consentToKeepData: boolean;
    vacancyId:         number;
}
