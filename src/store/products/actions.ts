import { EProductActions, TProductActionTypes } from './types';

export function setProducts(products: Array<IProduct>): TProductActionTypes {
    return {
        type: EProductActions.SET_PRODUCTS,
        products,
    };
}

export function setProductInDetail(productInDetail: IProduct | null): TProductActionTypes {
    return {
        type: EProductActions.SET_PRODUCT_IN_DETAIL,
        productInDetail,
    };
}

export function addProducts(products: Array<IProduct>): TProductActionTypes {
    return {
        type: EProductActions.ADD_PRODUCTS,
        products,
    };
}
export function setCount(count: number): TProductActionTypes {
    return {
        type: EProductActions.SET_COUNT,
        count,
    };
}
export function setPage(page: number): TProductActionTypes {
    return {
        type: EProductActions.SET_PAGE,
        page,
    };
}
