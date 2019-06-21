import { TDepartmentActionTypes, EDepartmentActions, IDepartmentStore } from './types';

const initialState: IDepartmentStore = {
    departments: [],
    active: null,
};

export const departmentReducer = (state = initialState, action: TDepartmentActionTypes) => {
    switch (action.type) {
        case EDepartmentActions.SET_DEPARTMENTS:
            return Object.assign({}, state, { departments: action.departments });
        case EDepartmentActions.SET_ACTIVE_DEPARTMENT:
            return Object.assign({}, state, { active: action.department });
    }
    return state;
};

export default departmentReducer;
