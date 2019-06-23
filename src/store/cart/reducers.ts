import { ECartActions, ICartStore, TCartActionTypes } from './types';
import { setItemToStorage } from '@utils/storage';

const initialState: ICartStore = {
    items: [],
    cart_id: '',
};

export const cartReducer = (state = initialState, action: TCartActionTypes) => {
    switch (action.type) {
        case ECartActions.SET_CART_ID:
            setItemToStorage('cartID', action.cart_id);
            console.log(action.cart_id);
            return Object.assign({}, state, { cart_id: action.cart_id });
        case ECartActions.SET_CART:
            return Object.assign({}, state, { items: action.items });
        case ECartActions.REMOVE_FROM_CART: {
            return Object.assign({}, state, {
                items: state.items.filter(item => item.item_id !== action.item_id),
            });
        }
        case ECartActions.SET_QUANTITY: {
            const copyItems = state.items.slice();
            const foundIndex = copyItems.findIndex(item => item.item_id === action.payload.item_id);
            if (foundIndex !== -1) {
                return Object.assign({}, state, {
                    items: Object.assign(copyItems, {
                        [foundIndex]: {
                            ...copyItems[foundIndex],
                            quantity: action.payload.quantity,
                        },
                    }),
                });
            }
            return state;
        }
    }
    return state;
};

export default cartReducer;
