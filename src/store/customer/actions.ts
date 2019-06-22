import { ECustomerActions, TCustomerActionTypes } from './types';

export function setCustomer(customer: ICustomer | null): TCustomerActionTypes {
    return {
        type: ECustomerActions.SET_CUSTOMER,
        customer,
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
