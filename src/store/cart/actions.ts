import { ECartActions, TCartActionTypes } from './types';

export function addToCart(item: ICartItem): TCartActionTypes {
    return {
        type: ECartActions.ADD_TO_CART,
        item,
    };
}

export function setCart(items: Array<ICartItem>): TCartActionTypes {
    return {
        type: ECartActions.SET_CART,
        items,
    };
}

export function removeFromCart(product_id: IProduct['product_id']): TCartActionTypes {
    return {
        type: ECartActions.REMOVE_FROM_CART,
        product_id,
    };
}
export function setQuantity(productQuantity: IProductQuantity): TCartActionTypes {
    return {
        type: ECartActions.SET_QUANTITY,
        productQuantity,
    };
}
