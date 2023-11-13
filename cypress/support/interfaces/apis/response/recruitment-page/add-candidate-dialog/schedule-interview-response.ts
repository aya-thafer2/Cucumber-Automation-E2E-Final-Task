export interface ICreateScheduleInterviewResponse {
    data: {
        id: number;
        name: string;
        candidate: Candidate;
        vacancy: Vacancy;
        interviewers: Interviewer[];
        interviewDate: string;
        interviewTime: string;
        note: null;
    }
    meta: Meta;
    rels: any[];
}

export interface Candidate {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
}

export interface Interviewer {
    empNumber: number;
    lastName: string;
    firstName: string;
    middleName: string;
    terminationId: null;
}

export interface Vacancy {
    id: number;
    name: string;
}

export interface Meta {
    historyId: number;
}
