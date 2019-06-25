export interface CreateOrderPayload {
    cart_id: string;
    shipping_id: number;
    tax_id: number;
}

export interface StripeChargePayload {
    stripeToken: string;
    order_id: number;
    description: string;
    amount: number;
    currency: string;
}
