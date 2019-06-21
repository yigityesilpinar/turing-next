import { ECategoryActions, TCategoryActionTypes } from './types';

export function setCategories(categories: Array<ICategory>): TCategoryActionTypes {
    return {
        type: ECategoryActions.SET_CATEGORIES,
        categories,
    };
}

export function setActiveCategory(category: ICategory | null): TCategoryActionTypes {
    return {
        type: ECategoryActions.SET_ACTIVE_CATEGORY,
        category,
    };
}
