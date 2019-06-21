export enum ESearchActions {
    SET_SEARCH = 'SET_SEARCH',
    SET_SEARCH_SAGA = 'SET_SEARCH_SAGA',
}

export interface ISearchsStore {
    search: string;
}

interface ISetSearchAction {
    type: ESearchActions.SET_SEARCH;
    search: string;
}

interface ISetSearchSagaAction {
    type: ESearchActions.SET_SEARCH_SAGA;
    search: string;
}

export type TSearchActionTypes = ISetSearchAction | ISetSearchSagaAction;
