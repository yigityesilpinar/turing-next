import { TCustomerActionTypes, ECustomerActions, ICustomerStore } from './types';

const initialState: ICustomerStore = {
    customer: null,
    accessToken: '',
    showAuth: '',
};

export const customerReducer = (state = initialState, action: TCustomerActionTypes) => {
    switch (action.type) {
        case ECustomerActions.SET_CUSTOMER:
            return Object.assign({}, state, { customer: action.customer });
        case ECustomerActions.SET_TOKEN:
            return Object.assign({}, state, { accessToken: action.accessToken });
        case ECustomerActions.SET_SHOW_AUTH:
            return Object.assign({}, state, { showAuth: action.showAuth });
    }
    return state;
};

export default customerReducer;
