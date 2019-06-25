export enum ECustomerActions {
    SET_CUSTOMER = 'SET_CUSTOMER',
    UPDATE_CUSTOMER = 'UPDATE_CUSTOMER',
    SET_CUSTOMER_READY = 'SET_CUSTOMER_READY',
    SET_TOKEN = 'SET_TOKEN',
    SET_SHOW_AUTH = 'SET_SHOW_AUTH',
}

export interface ICustomerStore {
    customer: ICustomer | null;
    accessToken: string;
    customerReady: boolean;
    showAuth: '' | 'login' | 'register';
}

interface ISetCustomerAction {
    type: ECustomerActions.SET_CUSTOMER;
    customer: ICustomer | null;
}

interface ISetCustomerReadyAction {
    type: ECustomerActions.SET_CUSTOMER_READY;
    value: boolean;
}

interface IUpdateCustomerAction {
    type: ECustomerActions.UPDATE_CUSTOMER;
    customerFields: Partial<ICustomer>;
}

interface ISetToken {
    type: ECustomerActions.SET_TOKEN;
    accessToken: string;
}

interface ISetShowAuth {
    type: ECustomerActions.SET_SHOW_AUTH;
    showAuth: '' | 'login' | 'register';
}

export type TCustomerActionTypes =
    | ISetCustomerAction
    | ISetToken
    | ISetShowAuth
    | IUpdateCustomerAction
    | ISetCustomerReadyAction;
