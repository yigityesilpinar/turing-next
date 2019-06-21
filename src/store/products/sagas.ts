import { select, takeLatest, put } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { ECategoryActions } from '@store/categories/types';
import { EDepartmentActions } from '@store/departments/types';
import { addProducts, setCount, setPage, setProducts } from './actions';
import { IAppState } from '@store/rootReducer';
import { EProductActions } from '@store/products/types';
import { setSearch } from '@store/search/actions';

function* refreshProducts({ isPageUpdate = false } = {}) {
    let updateProducts = setProducts;
    const activeCategory = yield select((state: IAppState) => state.categoryStore.active);
    const activeDepartment = yield select((state: IAppState) => state.departmentStore.active);
    const { page, limit } = yield select((state: IAppState) => state.productStore);
    const search = yield select((state: IAppState) => state.searchStore.search);
    // if category or department changes reset page
    if (!isPageUpdate && page !== 1) {
        return yield put(setPage(1));
    }
    if (isPageUpdate && page > 1) {
        updateProducts = addProducts;
    }
    if (activeCategory) {
        const response: AxiosResponse<IProductsResponse> = yield axios.get(
            `${process.env.API_BASE_URL}/products/inCategory/${activeCategory.category_id}?page=${page}&limit=${limit}`,
        );
        yield put(updateProducts(response.data.rows));
        yield put(setCount(response.data.count));
    } else if (activeDepartment) {
        const response: AxiosResponse<IProductsResponse> = yield axios.get(
            `${process.env.API_BASE_URL}/products/inDepartment/${activeDepartment.department_id}?page=${page}&limit=${limit}`,
        );
        yield put(updateProducts(response.data.rows));
        yield put(setCount(response.data.count));
    } else {
        const response: AxiosResponse<IProductsResponse> = yield axios.get(
            `${process.env.API_BASE_URL}/products?page=${page}&limit=${limit}`,
        );
        yield put(updateProducts(response.data.rows));
        yield put(setCount(response.data.count));
    }
    // clear search
    if (search) {
        yield put(setSearch(''));
    }
}

export const productSagas = [
    takeLatest(EDepartmentActions.SET_ACTIVE_DEPARTMENT, refreshProducts),
    takeLatest(ECategoryActions.SET_ACTIVE_CATEGORY, refreshProducts),
    // @ts-ignore
    takeLatest(EProductActions.SET_PAGE, refreshProducts, { isPageUpdate: true }),
];

export default productSagas;
