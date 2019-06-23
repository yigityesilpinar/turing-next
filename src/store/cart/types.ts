export enum ECartActions {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    SET_QUANTITY = 'SET_QUANTITY',
    SET_CART = 'SET_CART',
}

export interface ICartStore {
    items: Array<ICartItem>;
}

interface IAddToCart {
    type: ECartActions.ADD_TO_CART;
    item: ICartItem;
}

interface ISetCart {
    type: ECartActions.SET_CART;
    items: Array<ICartItem>;
}

interface IRemoveFromCart {
    type: ECartActions.REMOVE_FROM_CART;
    product_id: IProduct['product_id'];
}

interface ISetQuantity {
    type: ECartActions.SET_QUANTITY;
    productQuantity: IProductQuantity;
}

export type TCartActionTypes = IAddToCart | IRemoveFromCart | ISetQuantity | ISetCart;
