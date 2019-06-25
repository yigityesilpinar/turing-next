import BaseApi from '@api/index';

import { CreateOrderPayload, StripeChargePayload } from './types';

class CheckoutApi extends BaseApi {
    static getShippingRegions() {
        return this.request<Array<IShippingRegion>, IErrorResponse>({
            method: 'get',
            url: '/shipping/regions',
        });
    }

    static getShippings(shipping_region_id: IShippingRegion['shipping_region_id']) {
        return this.request<Array<IShipping>, IErrorResponse>({
            method: 'get',
            url: `/shipping/regions/${shipping_region_id}`,
        });
    }

    static stripeCharge(payload: StripeChargePayload, accessToken: string) {
        return this.request<Array<IShipping>, IErrorResponse>({
            data: payload,
            method: 'post',
            headers: { 'user-key': accessToken },
            url: `/stripe/charge`,
        });
    }

    static createOrder(payload: CreateOrderPayload, accessToken: string) {
        return this.request<ICreateOrderResponse, IErrorResponse>({
            data: payload,
            method: 'post',
            headers: { 'user-key': accessToken },
            url: `/orders`,
        });
    }

    static getOrderDetail(order_id: number, accessToken: string) {
        return this.request<IOrderDetail, IErrorResponse>({
            method: 'get',
            headers: { 'user-key': accessToken },
            url: `/orders/shortDetail/${order_id}`,
        });
    }
}

export default CheckoutApi;
