import { TCategoryActionTypes, ECategoryActions, ICategoryStore } from './types';

const initialState: ICategoryStore = {
    categories: [],
    active: null,
};

export const categoryReducer = (state = initialState, action: TCategoryActionTypes) => {
    switch (action.type) {
        case ECategoryActions.SET_CATEGORIES:
            return Object.assign({}, state, { categories: action.categories });
        case ECategoryActions.SET_ACTIVE_CATEGORY:
            return Object.assign({}, state, { active: action.category });
    }
    return state;
};

export default categoryReducer;
