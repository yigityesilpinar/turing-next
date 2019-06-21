import { all } from 'redux-saga/effects';
import { productSagas } from './products/sagas';
import { categorySagas } from './categories/sagas';
import { searchSagas } from './search/sagas';

export const rootSaga = function*() {
    yield all([...productSagas, ...categorySagas, ...searchSagas]);
};

export default rootSaga;
