import { ECartActions, TCartActionTypes } from './types';

export function setCart(items: Array<ICartItem>): TCartActionTypes {
    return {
        type: ECartActions.SET_CART,
        items,
    };
}

export function setCartID(cart_id: ICartIDResponse['cart_id']): TCartActionTypes {
    return {
        type: ECartActions.SET_CART_ID,
        cart_id,
    };
}

export function setQuantity(payload: Pick<ICartItem, 'item_id' | 'quantity'>): TCartActionTypes {
    return {
        type: ECartActions.SET_QUANTITY,
        payload,
    };
}

export function removeFromCart(item_id: ICartItem['item_id']): TCartActionTypes {
    return {
        type: ECartActions.REMOVE_FROM_CART,
        item_id,
    };
}
