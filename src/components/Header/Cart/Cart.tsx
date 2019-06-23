import React from 'react';
import Link from 'next/link';

import { Container, CartIcon, ItemCount } from './styled';
import { useSelector } from 'react-redux';
import { IAppState } from '@store/rootReducer';
const Cart: React.FC = () => {
    const items = useSelector<IAppState, IAppState['cartStore']['items']>(state => state.cartStore.items);

    return (
        <Link href="/cart">
            <Container>
                {items.length ? (
                    <ItemCount>
                        {items.reduce((acc, item) => {
                            acc += item.quantity;
                            return acc;
                        }, 0)}
                    </ItemCount>
                ) : null}
                <CartIcon src="/static/images/cart.png" />
            </Container>
        </Link>
    );
};

export default Cart;
