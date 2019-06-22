import React from 'react';

import { CURRENCY } from '@config/global';

import { IPrice } from './types';
import { Container } from './styled';

const Price: React.FC<IPrice> = ({ price, discounted_price }) => {
    return (
        <>
            <Container active={true}>
                {CURRENCY}
                {parseInt(discounted_price, 10) ? discounted_price : price}
            </Container>
            {parseInt(discounted_price, 10) ? (
                <Container>
                    {CURRENCY}
                    {price}
                </Container>
            ) : null}
        </>
    );
};

export default Price;
