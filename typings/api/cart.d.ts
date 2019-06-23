interface ICartIDResponse {
    cart_id: string;
}

interface ITotalAmountResponse {
    total_amount: string;
}

interface ICartItem {
    item_id: number;
    name: string;
    attributes: string;
    product_id: IProduct['product_id'];
    price: string;
    quantity: number;
    image: string;
    subtotal: string;
}
