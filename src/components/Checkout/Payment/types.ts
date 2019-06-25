import { ReactStripeElements } from 'react-stripe-elements';

export interface IHandleStripeCharge extends ReactStripeElements.InjectedStripeProps {
    accessToken: string;
    cart_id: string;
}
