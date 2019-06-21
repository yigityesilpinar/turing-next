export enum EProductActions {
    SET_PRODUCTS = 'SET_PRODUCTS',
    ADD_PRODUCTS = 'ADD_PRODUCTS',
    SET_COUNT = 'SET_COUNT',
    SET_PAGE = 'SET_PAGE',
}

export interface IProductsStore {
    products: Array<IProduct>;
    page: number;
    limit: number;
    count: number;
}

interface ISetProductsAction {
    type: EProductActions.SET_PRODUCTS;
    products: Array<IProduct>;
}

interface IAddProductsAction {
    type: EProductActions.ADD_PRODUCTS;
    products: Array<IProduct>;
}
interface ISetProductCount {
    type: EProductActions.SET_COUNT;
    count: number;
}
interface ISetProductPage {
    type: EProductActions.SET_PAGE;
    page: number;
}

export type TProductActionTypes = ISetProductsAction | IAddProductsAction | ISetProductCount | ISetProductPage;
