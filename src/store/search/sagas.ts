import { fork, debounce, put } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { ESearchActions, TSearchActionTypes } from './types';
import { setCount, setPage, setProducts } from '@store/products/actions';

function* search(action: TSearchActionTypes) {
    if (action.search) {
        const response: AxiosResponse<IProductsResponse> = yield axios.get(
            `${process.env.API_BASE_URL}/products/search?query_string=${action.search}&all_words=on`,
        );
        yield put(setProducts(response.data.rows));
        yield put(setCount(response.data.count));
    } else {
        yield put(setPage(1));
    }
}

function* debounceSearch() {
    yield debounce(500, ESearchActions.SET_SEARCH, search);
}

export const searchSagas = [fork(debounceSearch)];

export default searchSagas;
