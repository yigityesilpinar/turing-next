export enum EProductActions {
    SET_PRODUCTS = 'SET_PRODUCTS',
    ADD_PRODUCTS = 'ADD_PRODUCTS',
    SET_COUNT = 'SET_COUNT',
    SET_PAGE = 'SET_PAGE',
    SET_ATTRIBUTES = 'SET_ATTRIBUTES',
    SET_PRODUCT_IN_DETAIL = 'SET_PRODUCT_IN_DETAIL',
}

export interface IProductsStore {
    products: Array<IProduct>;
    productInDetail: IProduct | null;
    attributes: Array<IAttributeWithValues>;
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
interface ISetProductInDetail {
    type: EProductActions.SET_PRODUCT_IN_DETAIL;
    productInDetail: IProduct | null;
}

interface ISetAttributes {
    type: EProductActions.SET_ATTRIBUTES;
    attributes: Array<IAttributeWithValues>;
}

export type TProductActionTypes =
    | ISetProductsAction
    | IAddProductsAction
    | ISetProductCount
    | ISetProductPage
    | ISetProductInDetail
    | ISetAttributes;
