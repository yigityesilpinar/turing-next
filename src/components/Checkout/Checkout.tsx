import React from 'react';
import { useSelector } from 'react-redux';

import useLoggedInOnly from '@hooks/useLoggedInOnly';
import { IAppState } from '@store/rootReducer';
import StepsBar from '@components/StepsBar';
import { CHECKOUT_STEPS } from '@config/global';
import EmptyCart from '@components/EmptyCart';

import Delivery from './Delivery';
import Confirmation from './Confirmation';
import Payment from './Payment';
import Finish from './Finish';

import { Container, Heading } from './styled';

const Checkout: React.FC = () => {
    const currentStep = useSelector<IAppState, IAppState['checoutStore']['step']>(state => state.checoutStore.step);
    const items = useSelector<IAppState, IAppState['cartStore']['items']>(state => state.cartStore.items);
    useLoggedInOnly('/cart');

    if (currentStep !== 4 && !items.length) {
        return <EmptyCart />;
    }
    return (
        <Container>
            <Heading>Checkout</Heading>
            <StepsBar currentStep={currentStep} stepCount={4} labels={CHECKOUT_STEPS} />
            <Delivery />
            <Confirmation />
            <Payment />
            <Finish />
        </Container>
    );
};

export default Checkout;
