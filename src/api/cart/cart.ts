import BaseApi from '@api/index';
import { AddToCartPayload } from './types';

class CartApi extends BaseApi {
    static generateCartID() {
        return this.request<ICartIDResponse, any>({
            method: 'get',
            url: '/shoppingcart/generateUniqueId',
        });
    }

    static addToCart(data: AddToCartPayload) {
        return this.request<Array<ICartItem>, any>({
            data,
            method: 'post',
            url: '/shoppingcart/add',
        });
    }

    static getItemsInCart(cart_id: ICartIDResponse['cart_id']) {
        return this.request<Array<ICartItem>, any>({
            method: 'get',
            url: `/shoppingcart/${cart_id}`,
        });
    }

    static emptyCart(cart_id: ICartIDResponse['cart_id']) {
        return this.request<[], any>({
            method: 'delete',
            url: `/shoppingcart/empty/${cart_id}`,
        });
    }

    static removeItem(item_id: ICartItem['item_id']) {
        return this.request<[], any>({
            method: 'delete',
            url: `/shoppingcart/removeProduct/${item_id}`,
        });
    }

    static updateItem({ item_id, quantity }: Pick<ICartItem, 'item_id' | 'quantity'>) {
        return this.request<Array<ICartItem>, any>({
            data: { quantity },
            method: 'put',
            url: `/shoppingcart/update/${item_id}`,
        });
    }

    static getTotalAmount(cart_id: ICartIDResponse['cart_id']) {
        return this.request<ITotalAmountResponse, any>({
            method: 'get',
            url: `/shoppingcart/totalAmount/${cart_id}`,
        });
    }
}

export default CartApi;
