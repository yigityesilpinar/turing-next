import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PRODUCT_IMAGE_PATH } from '@config/global';
import { IAppState } from '@store/rootReducer';
import { setProductInDetail } from '@store/products/actions';
import Price from '@common/Price';

import {
    Container,
    PriceContainer,
    Image,
    ImageContainer,
    Name,
    Description,
    InteractiveContainer,
    AddToCart,
    Modal,
} from './styled';
import Reviews from './Reviews';
import Attributes from './Attributes';

const ProductDetails: React.FC = () => {
    const productInDetal = useSelector<IAppState, IAppState['productStore']['productInDetail']>(
        state => state.productStore.productInDetail,
    );
    const dispatch = useDispatch();
    const onCloseClick = () => dispatch(setProductInDetail(null));
    if (!productInDetal) {
        return null;
    }
    const { name, discounted_price, price, thumbnail, description, product_id } = productInDetal;
    return (
        <Modal onCloseClick={onCloseClick}>
            <Container>
                <Name>{name}</Name>
                <ImageContainer>
                    <Image src={`${PRODUCT_IMAGE_PATH}/${thumbnail}`} alt={name} />
                </ImageContainer>
                <Description>{description}</Description>
                <InteractiveContainer>
                    <PriceContainer>
                        <Price discounted_price={discounted_price} price={price} />
                    </PriceContainer>
                    <Attributes product_id={product_id} />
                    <AddToCart>Add to cart </AddToCart>
                </InteractiveContainer>
                <Reviews product_id={product_id} />
            </Container>
        </Modal>
    );
};

export default ProductDetails;
