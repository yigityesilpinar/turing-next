import { TProductActionTypes, EProductActions, IProductsStore } from './types';

const initialState: IProductsStore = {
    products: [],
    productInDetail: null,
    limit: 8,
    page: 1,
    count: 0,
};

export const productsReducer = (state = initialState, action: TProductActionTypes) => {
    switch (action.type) {
        case EProductActions.SET_PRODUCTS:
            return Object.assign({}, state, { products: action.products });
        case EProductActions.ADD_PRODUCTS:
            return Object.assign({}, state, { products: [...state.products, ...action.products] });
        case EProductActions.SET_COUNT:
            return Object.assign({}, state, { count: action.count });
        case EProductActions.SET_PAGE:
            return Object.assign({}, state, { page: action.page });
        case EProductActions.SET_PRODUCT_IN_DETAIL:
            return Object.assign({}, state, { productInDetail: action.productInDetail });
    }
    return state;
};

export default productsReducer;
