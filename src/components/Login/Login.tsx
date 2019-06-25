import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FBAuth from '@components/FBAuth/FBAuth';
import authApi from '@api/auth';
import { setCustomer, setToken } from '@store/customer/actions';

import { Container, Heading, TextInput, Text, SubmitBtn, AuthLink, Error } from './styled';
import { INPUT_CONFIG } from './static';
import { ILogin, IState } from './types';

const Login: React.FC<ILogin> = ({ switchAuthMethod, onLoginSuccess }) => {
    const [state, setState] = useState<IState>({
        email: '',
        password: '',
    });
    const dispatch = useDispatch();
    const [err, setError] = useState<IErrorResponse | undefined>(undefined);
    const hasError = (fieldName: keyof typeof state) => err && err.field.includes(fieldName);
    const setField = (fieldName: keyof typeof state) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (err) {
            setError(undefined);
        }
        e.persist();
        setState(currentState => ({ ...currentState, [fieldName]: e.target.value }));
    };

    const handleLoginResponse = ([response, error]: [IAuthResponse?, IErrorResponse?]) => {
        if (error) {
            setError(error);
            return;
        }
        if (response) {
            onLoginSuccess();
            dispatch(setCustomer(response.customer));
            dispatch(setToken(response.accessToken));
        }
    };

    const onFBSuccess = async (access_token: string) => {
        const [response, error] = await authApi.fbAuth({ access_token });
        handleLoginResponse([response, error]);
    };

    const onSubmit = async () => {
        const [response, error] = await authApi.login(state);
        handleLoginResponse([response, error]);
    };
    return (
        <Container>
            <Heading>Sign in</Heading>
            {INPUT_CONFIG.map(({ name, required, type }) => (
                <TextInput
                    key={name}
                    label={name}
                    value={state[name]}
                    onChange={setField(name)}
                    hasError={hasError(name)}
                    required={required}
                    type={type || 'text'}
                />
            ))}
            <SubmitBtn onClick={onSubmit}>Submit</SubmitBtn>
            {err && <Error>{err.message}</Error>}
            <Text>Or you can Sign in using facebook</Text>
            <FBAuth onSuccess={onFBSuccess} buttonText="Sign in with Facebook" />
            <Text>
                Don&apos;t have an account yet? <AuthLink onClick={switchAuthMethod}>Register</AuthLink>
            </Text>
        </Container>
    );
};

export default Login;
