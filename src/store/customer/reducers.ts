import { TCustomerActionTypes, ECustomerActions, ICustomerStore } from './types';

const initialState: ICustomerStore = {
    customer: null,
    accessToken: '',
};

export const customerReducer = (state = initialState, action: TCustomerActionTypes) => {
    switch (action.type) {
        case ECustomerActions.SET_CUSTOMER:
            return Object.assign({}, state, { customer: action.customer });
        case ECustomerActions.SET_TOKEN:
            return Object.assign({}, state, { accessToken: action.accessToken });
    }
    return state;
};

export default customerReducer;
