export enum ECategoryActions {
    SET_CATEGORIES = 'SET_CATEGORIES',
    SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY',
}

export interface ICategoryStore {
    categories: Array<ICategory>;
    active: ICategory | null;
}

interface ISetCategoriesAction {
    type: ECategoryActions.SET_CATEGORIES;
    categories: Array<ICategory>;
}

interface ISetActiveCategoryAction {
    type: ECategoryActions.SET_ACTIVE_CATEGORY;
    category: ICategory | null;
}

export type TCategoryActionTypes = ISetCategoriesAction | ISetActiveCategoryAction;
