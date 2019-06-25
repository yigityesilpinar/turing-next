import React from 'react';

import { CURRENCY } from '@config/global';

import { Container, Price, Quantity, Name } from './styled';

const CartItem: React.FC<ICartItem> = item => {
    const { name, price, quantity } = item;

    return (
        <Container>
            <Name>{name}</Name>
            <Quantity>{quantity}</Quantity>
            <Price>
                {CURRENCY}
                {price}
            </Price>
        </Container>
    );
};

export default CartItem;
