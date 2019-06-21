import React from 'react';

import { Button } from './styled';
import useFacebookSDK from './hooks/useFacebookSDK';
import useFacebookLogin from './hooks/useFacebookLogin';

const FacebookAuth: React.FC = () => {
    const loaded = useFacebookSDK();
    const onSuccess = async (_token: string) => {
        // TODO
    };
    const handleClick = useFacebookLogin(onSuccess);
    return (
        <Button onClick={handleClick} disabled={!loaded}>
            login with facebook
        </Button>
    );
};

export default FacebookAuth;
