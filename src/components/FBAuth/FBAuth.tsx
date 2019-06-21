import React from 'react';

import { Button, Text } from './styled';
import { FBIcon } from './static';
import { IFBAuth } from './types';
import useFacebookSDK from './hooks/useFacebookSDK';
import useFacebookLogin from './hooks/useFacebookLogin';

const FBAuth: React.FC<IFBAuth> = ({ onSuccess, buttonText }) => {
    const loaded = useFacebookSDK();
    const handleClick = useFacebookLogin(onSuccess);
    return (
        <Button onClick={handleClick} disabled={!loaded}>
            <FBIcon />
            <Text>{buttonText}</Text>
        </Button>
    );
};

export default FBAuth;
