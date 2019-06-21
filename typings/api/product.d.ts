interface IProduct {
    product_id: number;
    name: string;
    description: string;
    price: string;
    discounted_price: string;
    thumbnail: string;
}

interface IProductsResponse {
    count: number;
    rows: Array<IProduct>;
}
