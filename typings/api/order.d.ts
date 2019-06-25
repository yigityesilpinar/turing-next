interface ICreateOrderResponse {
    orderId: number;
}

interface IOrderDetail {
    order_id: number;
    total_amount: string;
    created_on: string;
    shipped_on: string;
    status: string;
    name: string;
}
