export enum EDepartmentActions {
    SET_DEPARTMENTS = 'SET_DEPARTMENTS',
    SET_ACTIVE_DEPARTMENT = 'SET_ACTIVE_DEPARTMENT',
}

export interface IDepartmentStore {
    departments: Array<IDepartment>;
    active: IDepartment | null;
}

interface ISetDepartmentsAction {
    type: EDepartmentActions.SET_DEPARTMENTS;
    departments: Array<IDepartment>;
}

interface ISetActiveDepartmentAction {
    type: EDepartmentActions.SET_ACTIVE_DEPARTMENT;
    department: IDepartment | null;
}

export type TDepartmentActionTypes = ISetDepartmentsAction | ISetActiveDepartmentAction;
