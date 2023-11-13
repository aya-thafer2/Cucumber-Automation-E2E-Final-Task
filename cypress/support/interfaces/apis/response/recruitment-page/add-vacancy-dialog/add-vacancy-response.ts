export interface ICreateAddVacancyResponse {
    data: {
        id: number;
        name: string;
        description: string;
        numOfPositions: null;
        status: boolean;
        isPublished: boolean;
        jobTitle: {
            id: number;
            title: string;
            isDeleted: boolean;
        }
        hiringManager: {
            id: number;
            firstName: string;
            middleName: string;
            lastName: string;
            terminationId: null;
        }
    }
    meta: any[];
    rels: any[];
}

