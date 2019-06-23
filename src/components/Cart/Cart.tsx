import React from 'react';
import { useSelector } from 'react-redux';

import { IAppState } from '@store/rootReducer';

import { Container, Heading, List, Total } from './styled';
import Item from './Item';
import ListHeader from './ListHeader';
import Bottom from './Bottom';
import { CURRENCY } from '@config/global';
import { getTotal } from '@utils/product';

const Cart: React.FC = () => {
    const items = useSelector<IAppState, IAppState['cartStore']['items']>(state => state.cartStore.items);
    if (!items.length) {
        // TODO
        return <Container>Empty cart</Container>;
    }
    return (
        <Container>
            <Heading>
                {items.length} item{items.length > 1 ? 's' : ''} in your cart
            </Heading>
            <ListHeader />
            <List>
                {items.map(item => (
                    <Item key={item.product_id} {...item} />
                ))}
            </List>
            <Total>
                TOTAL {CURRENCY}
                {getTotal(items)}
            </Total>
            <Bottom />
        </Container>
    );
};

export default Cart;
