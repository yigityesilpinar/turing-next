import { toast } from 'react-toastify';

import checkoutApi from '@api/checkout';

import { IHandleStripeCharge } from './types';

export const handleStripeCharge = async ({ accessToken, cart_id, stripe }: IHandleStripeCharge) => {
    if (!stripe) {
        return false;
    }
    let { token } = await stripe.createToken({});
    if (!token) {
        toast.error('Pleas Fill Payment Details Correctly');
        return false;
    }
    // token.id
    const [orderRes, orderErr] = await checkoutApi.createOrder(
        {
            cart_id,
            shipping_id: 1,
            tax_id: 1,
        },
        accessToken,
    );
    if (orderErr || !orderRes) {
        toast.error('Ooops sorry sth went wrong Order, please try again later!');
        return false;
    }
    const [orderDetailRes, orderDetailErr] = await checkoutApi.getOrderDetail(orderRes.orderId, accessToken);
    if (orderDetailErr || !orderDetailRes) {
        toast.error('Ooops sorry sth went wrong with Order details, please try again later!');
        return false;
    }
    const [, chargeErr] = await checkoutApi.stripeCharge(
        {
            order_id: orderRes.orderId,
            amount: parseInt(orderDetailRes.total_amount.replace('.', ''), 10),
            currency: 'GBP',
            description: orderDetailRes.name,
            stripeToken: token.id,
        },
        accessToken,
    );
    if (chargeErr) {
        toast.error(chargeErr.message);
        return 'charge_error';
    }
    toast.success('SUCCESSFULLY CHARGED');
    return true;
};
