export interface ICreateHireResponse {
    data: {
        id: number;
        candidate: Candidate;
        vacancy: Vacancy;
        note: null;
        action: Action;
    }
    meta: any[];
    rels: any[];
}

export interface Action {
    id: number;
    label: string;
}

export interface Candidate {
    id: number;
    firstName: string;
    middleName: null;
    lastName: string;
}

export interface Vacancy {
    id: number;
    name: string;
    hiringManager: HiringManager;
}

export interface HiringManager {
    empNumber: number;
    firstName: string;
    middleName: string;
    lastName: string;
    terminationId: null;
}
