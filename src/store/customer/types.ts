export enum ECustomerActions {
    SET_CUSTOMER = 'SET_CUSTOMER',
    SET_TOKEN = 'SET_TOKEN',
    SET_SHOW_AUTH = 'SET_SHOW_AUTH',
}

export interface ICustomerStore {
    customer: ICustomer | null;
    accessToken: string;
    showAuth: '' | 'login' | 'register';
}

interface ISetCustomerAction {
    type: ECustomerActions.SET_CUSTOMER;
    customer: ICustomer | null;
}
interface ISetToken {
    type: ECustomerActions.SET_TOKEN;
    accessToken: string;
}

interface ISetShowAuth {
    type: ECustomerActions.SET_SHOW_AUTH;
    showAuth: '' | 'login' | 'register';
}

export type TCustomerActionTypes = ISetCustomerAction | ISetToken | ISetShowAuth;
