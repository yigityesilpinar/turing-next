import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { IAppState } from '@store/rootReducer';
import { CURRENCY } from '@config/global';
import cartApi from '@api/cart';
import { setCart } from '@store/cart/actions';
import EmptyCart from '@components/EmptyCart';

import { Container, Heading, List, Total, EmptyButton } from './styled';
import Item from './Item';
import ListHeader from './ListHeader';
import Bottom from './Bottom';

const Cart: React.FC = () => {
    const { cart_id, items } = useSelector<IAppState, IAppState['cartStore']>(state => state.cartStore);
    const [total, setTotal] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        if (cart_id) {
            cartApi.getItemsInCart(cart_id).then(([res, err]) => {
                if (res && !err) {
                    dispatch(setCart(res));
                } else {
                    console.log(res, err);
                    toast.error('Oops sorry we can not display your cart at the moment');
                }
            });
            cartApi.getTotalAmount(cart_id).then(([res, err]) => {
                if (res && !err) {
                    setTotal(res.total_amount);
                }
            });
        }
    }, [
        cart_id,
        items.reduce((acc, item) => {
            acc += item.quantity;
            return acc;
        }, 0),
    ]);
    const handleClickEmpty = () => {
        cartApi.emptyCart(cart_id).then(([res, err]) => {
            if (res && !err) {
                dispatch(setCart(res));
            }
        });
    };
    if (!items.length) {
        return <EmptyCart />;
    }
    return (
        <Container>
            <Heading>
                {items.length} item{items.length > 1 ? 's' : ''} in your cart
            </Heading>
            <EmptyButton onClick={handleClickEmpty}>Empty Cart</EmptyButton>
            <ListHeader />
            <List>
                {items.map(item => (
                    <Item key={item.item_id} {...item} />
                ))}
            </List>
            <Total>
                TOTAL {CURRENCY}
                {total}
            </Total>
            <Bottom />
        </Container>
    );
};

export default Cart;
