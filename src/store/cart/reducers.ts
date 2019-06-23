import { ECartActions, ICartStore, TCartActionTypes } from './types';
import { setItemToStorage } from '@utils/storage';

const initialState: ICartStore = {
    items: [],
};

export const cartReducer = (state = initialState, action: TCartActionTypes) => {
    switch (action.type) {
        case ECartActions.SET_CART:
            return Object.assign({}, state, { items: action.items });
        case ECartActions.ADD_TO_CART: {
            const updatedState = Object.assign({}, state, { items: state.items.slice().concat([action.item]) });
            setItemToStorage('cartItems', JSON.stringify(updatedState.items));
            return updatedState;
        }
        case ECartActions.REMOVE_FROM_CART: {
            const updatedState = Object.assign({}, state, {
                items: state.items.filter(item => item.product_id !== action.product_id),
            });
            setItemToStorage('cartItems', JSON.stringify(updatedState.items));
            return updatedState;
        }
        case ECartActions.SET_QUANTITY: {
            const copyItems = state.items.slice();
            const foundIndex = copyItems.findIndex(item => item.product_id === action.productQuantity.product_id);
            if (foundIndex !== -1) {
                const updatedState = Object.assign({}, state, {
                    items: Object.assign(copyItems, {
                        [foundIndex]: {
                            ...copyItems[foundIndex],
                            quantity: action.productQuantity.quantity,
                        },
                    }),
                });
                setItemToStorage('cartItems', JSON.stringify(updatedState.items));
                return updatedState;
            }
            return state;
        }
    }
    return state;
};

export default cartReducer;
