import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import cartApi from '@api/cart';
import { setQuantity } from '@store/cart/actions';

import { Container, QuantityDisplay, Decrease, Increase } from './styled';

const CartItem: React.FC<ICartItem> = ({ quantity, item_id }) => {
    const dispatch = useDispatch();
    const handleQuantityChange = async (newQuantity: typeof quantity) => {
        const [res, err] = await cartApi.updateItem({
            item_id,
            quantity: newQuantity,
        });
        if (res && !err) {
            dispatch(
                setQuantity({
                    quantity: newQuantity,
                    item_id,
                }),
            );
        } else {
            toast.error('oops sorry sth went wrong!');
        }
    };
    const handleIncrease = () => handleQuantityChange(quantity + 1);

    const handleDecrease = () => {
        if (quantity < 2) {
            return;
        }
        handleQuantityChange(quantity - 1);
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
