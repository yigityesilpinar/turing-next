import { ESearchActions, TSearchActionTypes } from './types';

export function setSearch(search: string): TSearchActionTypes {
    return {
        type: ESearchActions.SET_SEARCH,
        search,
    };
}

export function setSearchSaga(search: string): TSearchActionTypes {
    return {
        type: ESearchActions.SET_SEARCH_SAGA,
        search,
    };
}
