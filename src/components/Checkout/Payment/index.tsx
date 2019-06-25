import React, { useEffect, useState } from 'react';
import { Elements, injectStripe, StripeProvider } from 'react-stripe-elements';

import Payment from './Payment';

const StripePayment = process.browser ? injectStripe(Payment) : Payment;
const StripeWrapper = () => {
    const [stripe, setStripe] = useState(null);

    useEffect(() => {
        setStripe(window.Stripe('pk_test_NcwpaplBCuTL6I0THD44heRe'));
    }, []);
    return (
        <StripeProvider stripe={stripe}>
            <Elements>
                <StripePayment />
            </Elements>
        </StripeProvider>
    );
};

export default StripeWrapper;
