import { all } from 'redux-saga/effects';
import { productSagas } from './products/sagas';
import { categorySagas } from './categories/sagas';

export const rootSaga = function*() {
    yield all([...productSagas, ...categorySagas]);
};

export default rootSaga;
