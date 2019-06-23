import React from 'react';
import { useDispatch } from 'react-redux';

import { PRODUCT_IMAGE_PATH } from '@config/global';
import { setProductInDetail } from '@store/products/actions';
import Price from '@common/Price';

import { Container, Content, Name, Image, PriceContainer, Description } from './styled';

const Product: React.FC<IProduct> = product => {
    const { name, discounted_price, price, thumbnail, description } = product;
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setProductInDetail(product));
    };
    return (
        <Container onClick={handleClick}>
            <Content>
                <Name>{name}</Name>
                <Image src={`${PRODUCT_IMAGE_PATH}/${thumbnail}`} alt={name} />
                <PriceContainer>
                    <Price discounted_price={discounted_price} price={price} />
                </PriceContainer>
                <Description>{description}</Description>
            </Content>
        </Container>
    );
};

export default Product;
