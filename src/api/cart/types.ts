export interface AddToCartPayload {
    cart_id: string;
    product_id: IProduct['product_id'];
    attributes: string;
}
