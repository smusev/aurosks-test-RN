export interface assessmentsType {
  type: string;
  payload: any;
}

export interface assessmentType {
    acId: number,
    copId: string,
    status: Object,
    creationData:Object,
    requeryData: Object,
    openDate:Object,
    modifiedDate: Object,
    closedDate: Object,
    author: Object,
    lastModified:Object,
    descriptor: string,
    project: Object,
    subProject: Object,
    signOffText: string,
    dotPath: string,
    lineItems: null,
    coCreators: null,
    evaluators: null,
    chapters: null,
    possibleStatuses: null,
    possibleConfStates: null,
    links: Array<Object>
  }