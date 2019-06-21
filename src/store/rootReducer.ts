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

export interface IAppState {
    productStore: IProductsStore;
    customerStore: ICustomerStore;
    departmentStore: IDepartmentStore;
    categoryStore: ICategoryStore;
    searchStore: ISearchsStore;
}

export const rootReducer = combineReducers<IAppState>({
    productStore: productsReducer,
    customerStore: customerReducer,
    departmentStore: departmentReducer,
    categoryStore: categoryReducer,
    searchStore: searchsReducer,
});
