interface ICartItem {
    product_id: IProduct['product_id'];
    quantity: number;
    product: IProduct;
    attributes: Array<IAttributeInProduct>;
}

interface IProductQuantity {
    product_id: IProduct['product_id'];
    quantity: number;
}
