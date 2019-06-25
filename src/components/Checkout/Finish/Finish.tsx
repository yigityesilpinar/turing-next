import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import { IAppState } from '@store/rootReducer';

import { Container, Heading, Text, FinishButton } from './styled';
import Icon from './Icon';
import { setCheckoutStep } from '@store/checkout/actions';

const Finish: React.FC = () => {
    const dispatch = useDispatch();

    const currentStep = useSelector<IAppState, IAppState['checoutStore']['step']>(state => state.checoutStore.step);

    const handleClick = () => {
        Router.push('/');
        dispatch(setCheckoutStep(1));
    };
    if (currentStep !== 4) {
        return null;
    }

    return (
        <Container>
            <Icon />
            <Heading>Success</Heading>
            <Text>Your items will be shipped shortly, you will get email with details.</Text>
            <FinishButton onClick={handleClick}>Back to shop</FinishButton>
        </Container>
    );
};

export default Finish;
