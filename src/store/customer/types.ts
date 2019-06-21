export enum ECustomerActions {
    SET_CUSTOMER = 'SET_CUSTOMER',
    SET_TOKEN = 'SET_TOKEN',
}

export interface ICustomerStore {
    customer: ICustomer | null;
    accessToken: string;
}

interface ISetCustomerAction {
    type: ECustomerActions.SET_CUSTOMER;
    customer: ICustomer | null;
}
interface ISetToken {
    type: ECustomerActions.SET_TOKEN;
    accessToken: string;
}

export type TCustomerActionTypes = ISetCustomerAction | ISetToken;
