import { combineReducers } from 'redux';

import { productsReducer } from './products';
import { IProductsStore } from './products/types';
import { customerReducer } from './customer';
import { ICustomerStore } from './customer/types';
import { departmentReducer } from './departments';
import { IDepartmentStore } from './departments/types';
import { categoryReducer } from './categories';
import { ICategoryStore } from './categories/types';
import { searchsReducer } from './search';
import { ISearchsStore } from './search/types';
import { cartReducer } from './cart';
import { ICartStore } from './cart/types';
import { attributesReducer } from './attributes';
import { IAttributesStore } from './attributes/types';
import { checkoutReducer } from './checkout';
import { ICheckoutStore } from './checkout/types';

export interface IAppState {
    productStore: IProductsStore;
    customerStore: ICustomerStore;
    departmentStore: IDepartmentStore;
    categoryStore: ICategoryStore;
    searchStore: ISearchsStore;
    cartStore: ICartStore;
    attributesStore: IAttributesStore;
    checoutStore: ICheckoutStore;
}

export const rootReducer = combineReducers<IAppState>({
    productStore: productsReducer,
    customerStore: customerReducer,
    departmentStore: departmentReducer,
    categoryStore: categoryReducer,
    searchStore: searchsReducer,
    cartStore: cartReducer,
    attributesStore: attributesReducer,
    checoutStore: checkoutReducer,
});
