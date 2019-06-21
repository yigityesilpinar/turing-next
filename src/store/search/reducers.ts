import { TSearchActionTypes, ESearchActions, ISearchsStore } from './types';

const initialState: ISearchsStore = {
    search: '',
};

export const searchsReducer = (state = initialState, action: TSearchActionTypes) => {
    switch (action.type) {
        case ESearchActions.SET_SEARCH:
            return Object.assign({}, state, { search: action.search });
    }
    return state;
};

export default searchsReducer;
