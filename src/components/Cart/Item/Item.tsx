import React from 'react';
import { useDispatch } from 'react-redux';

import { removeFromCart } from '@store/cart/actions';
import { CURRENCY, PRODUCT_IMAGE_PATH } from '@config/global';
import { getActualPrice, getSubTotal } from '@utils/product';

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

const CartItem: React.FC<ICartItem> = item => {
    const { product, attributes, quantity } = item;
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(removeFromCart(product.product_id));
    };
    const actualPrice = getActualPrice({
        discounted_price: product.discounted_price,
        price: product.price,
    });
    return (
        <Container>
            <LeftContainer>
                <Image src={`${PRODUCT_IMAGE_PATH}/${product.thumbnail}`} />
                <NameContainer>
                    <Text>{product.name}</Text>
                    <RemoveBtn onClick={handleRemove}>
                        <CloseIcon src="/static/images/close_icon.png" />
                        remove
                    </RemoveBtn>
                </NameContainer>
            </LeftContainer>
            <RightContainer>
                <AttributesContainer>
                    {attributes.map(attr => (
                        <Text key={attr.attribute_name}>
                            {attr.attribute_name}: {attr.attribute_value}
                        </Text>
                    ))}
                </AttributesContainer>
                <Quantity {...item} />
                <Price>
                    {CURRENCY}
                    {actualPrice}
                </Price>
                <SubTotal>
                    {CURRENCY}
                    {getSubTotal({
                        price: actualPrice,
                        quantity,
                    })}
                </SubTotal>
            </RightContainer>
        </Container>
    );
};

export default CartItem;
