import React from 'react';

import Register from '@components/Register';
import Login from '@components/Login';

import { Container, Modal } from './styled';
import { IAppState } from '@store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { setShowAuth } from '@store/customer/actions';

const Auth: React.FC = () => {
    const dispatch = useDispatch();
    const showAuth = useSelector<IAppState, IAppState['customerStore']['showAuth']>(
        state => state.customerStore.showAuth,
    );
    if (!showAuth) {
        return null;
    }

    const handleShowAuth = (value: 'login' | 'register' | '') => () => dispatch(setShowAuth(value));

    return (
        <Container>
            {showAuth === 'login' ? (
                <Modal onCloseClick={handleShowAuth('')}>
                    <Login switchAuthMethod={handleShowAuth('register')} onLoginSuccess={handleShowAuth('')} />
                </Modal>
            ) : (
                <Modal onCloseClick={handleShowAuth('')}>
                    <Register switchAuthMethod={handleShowAuth('login')} onRegisterSuccess={handleShowAuth('')} />
                </Modal>
            )}
        </Container>
    );
};

export default Auth;
