import { TCheckoutActionTypes, ECheckoutActions, ICheckoutStore } from './types';

const initialState: ICheckoutStore = {
    step: 1,
};

export const checkoutReducer = (state = initialState, action: TCheckoutActionTypes) => {
    switch (action.type) {
        case ECheckoutActions.SET_STEP:
            return Object.assign({}, state, { step: action.step });
    }
    return state;
};

export default checkoutReducer;
