import React from 'react';

import { Container, QuantityDisplay, Decrease, Increase } from './styled';
import { useDispatch } from 'react-redux';
import { setQuantity } from '@store/cart/actions';

const CartItem: React.FC<ICartItem> = ({ quantity, product_id }) => {
    const dispatch = useDispatch();
    const handleIncrease = () =>
        dispatch(
            setQuantity({
                quantity: quantity + 1,
                product_id,
            }),
        );

    const handleDecrease = () => {
        if (quantity < 2) {
            return;
        }
        dispatch(
            setQuantity({
                quantity: quantity - 1,
                product_id,
            }),
        );
    };

    return (
        <Container>
            <Decrease onClick={handleDecrease}>-</Decrease>
            <QuantityDisplay>{quantity}</QuantityDisplay>
            <Increase onClick={handleIncrease}>+</Increase>
        </Container>
    );
};

export default CartItem;
