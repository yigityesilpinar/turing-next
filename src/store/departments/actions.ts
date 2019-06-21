import { EDepartmentActions, TDepartmentActionTypes } from './types';

export function setDepartments(departments: Array<IDepartment>): TDepartmentActionTypes {
    return {
        type: EDepartmentActions.SET_DEPARTMENTS,
        departments,
    };
}

export function setActiveDepartment(department: IDepartment | null): TDepartmentActionTypes {
    return {
        type: EDepartmentActions.SET_ACTIVE_DEPARTMENT,
        department,
    };
}
