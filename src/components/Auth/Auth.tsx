import React, { useState } from 'react';

import Register from '@components/Register';
import Login from '@components/Login';

import { Container, AuthLink, Modal, Text } from './styled';
import { IAppState } from '@store/rootReducer';
import { useSelector } from 'react-redux';

const Auth: React.FC = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const customer = useSelector<IAppState, IAppState['customerStore']['customer']>(
        state => state.customerStore.customer,
    );
    const handleRegisterClick = (show: boolean) => () => setShowRegister(show);
    const handleLoginClick = (show: boolean) => () => setShowLogin(show);
    const switchAuthMethod = () => {
        setShowRegister(!showRegister);
        setShowLogin(!showLogin);
    };
    const onRegisterSuccess = () => setShowRegister(false);
    const onLoginSuccess = () => setShowLogin(false);

    if (customer) {
        return (
            <Container>
                Hi <Text>{customer.name}</Text>!
            </Container>
        );
    }

    return (
        <Container>
            Hi! <AuthLink onClick={handleLoginClick(true)}>Sign in</AuthLink> or{' '}
            <AuthLink onClick={handleRegisterClick(true)}>Sign up</AuthLink>
            {showRegister && (
                <Modal onCloseClick={handleRegisterClick(false)}>
                    <Register switchAuthMethod={switchAuthMethod} onRegisterSuccess={onRegisterSuccess} />
                </Modal>
            )}
            {showLogin && (
                <Modal onCloseClick={handleLoginClick(false)}>
                    <Login switchAuthMethod={switchAuthMethod} onLoginSuccess={onLoginSuccess} />
                </Modal>
            )}
        </Container>
    );
};

export default Auth;
