import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IAppState } from '@store/rootReducer';
import { setCustomer, setShowAuth, setToken } from '@store/customer/actions';

import { Container, AuthLink, Text } from './styled';
const Auth: React.FC = () => {
    const dispatch = useDispatch();
    const customer = useSelector<IAppState, IAppState['customerStore']['customer']>(
        state => state.customerStore.customer,
    );
    const handleShowAuth = (value: 'login' | 'register' | '') => () => dispatch(setShowAuth(value));
    const handleLogout = () => {
        dispatch(setCustomer(null));
        dispatch(setToken(''));
    };

    if (customer) {
        return (
            <Container>
                Hi <Text>{customer.name}</Text>! <AuthLink onClick={handleLogout}>Sign out</AuthLink>
            </Container>
        );
    }

    return (
        <Container>
            Hi! <AuthLink onClick={handleShowAuth('login')}>Sign in</AuthLink> or{' '}
            <AuthLink onClick={handleShowAuth('register')}>Sign up</AuthLink>
        </Container>
    );
};

export default Auth;
