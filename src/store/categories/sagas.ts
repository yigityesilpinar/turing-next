import { takeLatest, select, put } from 'redux-saga/effects';

import { EDepartmentActions } from '@store/departments/types';
import { IAppState } from '@store/rootReducer';
import { setActiveCategory } from '@store/categories/actions';

function* refreshCategories() {
    const activeCategory = yield select((state: IAppState) => state.categoryStore.active);
    const activeDepartment = yield select((state: IAppState) => state.departmentStore.active);
    if (activeCategory && activeDepartment) {
        //if the activeCategory not in activeDepartment unset
        if (activeCategory.department_id !== activeDepartment.department_id) {
            yield put(setActiveCategory(null));
        }
    }
}

export const categorySagas = [takeLatest(EDepartmentActions.SET_ACTIVE_DEPARTMENT, refreshCategories)];

export default categorySagas;
