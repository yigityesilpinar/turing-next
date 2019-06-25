import { ECustomerActions, TCustomerActionTypes } from './types';

export function setCustomer(customer: ICustomer | null): TCustomerActionTypes {
    return {
        type: ECustomerActions.SET_CUSTOMER,
        customer,
    };
}

export function setCustomerReady(value: boolean): TCustomerActionTypes {
    return {
        type: ECustomerActions.SET_CUSTOMER_READY,
        value,
    };
}

export function updateCustomer(customerFields: Partial<ICustomer>): TCustomerActionTypes {
    return {
        type: ECustomerActions.UPDATE_CUSTOMER,
        customerFields,
    };
}

export function setToken(accessToken: string): TCustomerActionTypes {
    return {
        type: ECustomerActions.SET_TOKEN,
        accessToken,
    };
}

export function setShowAuth(showAuth: '' | 'login' | 'register'): TCustomerActionTypes {
    return {
        type: ECustomerActions.SET_SHOW_AUTH,
        showAuth,
    };
}
