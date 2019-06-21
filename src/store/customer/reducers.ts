import { TCustomerActionTypes, ECustomerActions, ICustomerStore } from './types';

const initialState: ICustomerStore = {
    customer: null,
};

export const customerReducer = (state = initialState, action: TCustomerActionTypes) => {
    switch (action.type) {
        case ECustomerActions.SET_CUSTOMER:
            return Object.assign({}, state, { customer: action.customer });
    }
    return state;
};

export default customerReducer;
