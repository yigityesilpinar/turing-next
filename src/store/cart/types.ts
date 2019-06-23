export enum ECartActions {
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    SET_CART = 'SET_CART',
    SET_CART_ID = 'SET_CART_ID',
    SET_QUANTITY = 'SET_QUANTITY',
}

export interface ICartStore {
    items: Array<ICartItem>;
    cart_id: ICartIDResponse['cart_id'];
}

interface ISetCart {
    type: ECartActions.SET_CART;
    items: Array<ICartItem>;
}

interface ISetCartID {
    type: ECartActions.SET_CART_ID;
    cart_id: ICartIDResponse['cart_id'];
}

interface ISetQuantity {
    type: ECartActions.SET_QUANTITY;
    payload: Pick<ICartItem, 'item_id' | 'quantity'>;
}

interface IRemoveFromCart {
    type: ECartActions.REMOVE_FROM_CART;
    item_id: ICartItem['item_id'];
}

export type TCartActionTypes = IRemoveFromCart | ISetCart | ISetCartID | ISetQuantity;
