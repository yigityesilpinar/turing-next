import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { CURRENCY, PRODUCT_IMAGE_PATH } from '@config/global';
import cartApi from '@api/cart';

import {
    Container,
    Image,
    Text,
    AttributesContainer,
    Price,
    SubTotal,
    LeftContainer,
    RightContainer,
    NameContainer,
    RemoveBtn,
    CloseIcon,
} from './styled';
import Quantity from './Quantity';
import { removeFromCart } from '@store/cart/actions';

const CartItem: React.FC<ICartItem> = item => {
    const { name, image, price, subtotal, attributes, item_id } = item;
    const dispatch = useDispatch();
    const handleRemove = async () => {
        const [, err] = await cartApi.removeItem(item_id);
        if (err) {
            toast.error('Oops sorry we can not remove this item at the moment');
        } else {
            dispatch(removeFromCart(item_id));
        }
    };

    return (
        <Container>
            <LeftContainer>
                <Image src={`${PRODUCT_IMAGE_PATH}/${image}`} />
                <NameContainer>
                    <Text>{name}</Text>
                    <RemoveBtn onClick={handleRemove}>
                        <CloseIcon src="/static/images/close_icon.png" />
                        remove
                    </RemoveBtn>
                </NameContainer>
            </LeftContainer>
            <RightContainer>
                <AttributesContainer>
                    <Text>{attributes}</Text>
                </AttributesContainer>
                <Quantity {...item} />
                <Price>
                    {CURRENCY}
                    {price}
                </Price>
                <SubTotal>
                    {CURRENCY}
                    {subtotal}
                </SubTotal>
            </RightContainer>
        </Container>
    );
};

export default CartItem;
