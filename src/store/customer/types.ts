export enum ECustomerActions {
    SET_CUSTOMER = 'SET_CUSTOMER',
}

export interface ICustomerStore {
    customer: ICustomer | null;
}

interface ISetCustomerAction {
    type: ECustomerActions.SET_CUSTOMER;
    customer: ICustomer | null;
}

export type TCustomerActionTypes = ISetCustomerAction;
