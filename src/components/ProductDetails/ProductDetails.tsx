import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

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
import { addToCart } from '@store/cart/actions';

const ProductDetails: React.FC = () => {
    const productInDetail = useSelector<IAppState, IAppState['productStore']['productInDetail']>(
        state => state.productStore.productInDetail,
    );
    const items = useSelector<IAppState, IAppState['cartStore']['items']>(state => state.cartStore.items);
    const selectedAttributes = useSelector<IAppState, IAppState['attributesStore']['attributes']>(
        state => state.attributesStore.attributes,
    );
    const dispatch = useDispatch();
    if (!productInDetail) {
        return null;
    }
    const isInCart = !!items.find(item => item.product_id === productInDetail.product_id);
    const onCloseClick = () => dispatch(setProductInDetail(null));
    const { name, discounted_price, price, thumbnail, description, product_id } = productInDetail;

    const handleAddToCart = () => {
        if (isInCart) {
            dispatch(setProductInDetail(null));
            Router.push('/cart');
            return;
        }
        dispatch(
            addToCart({
                product_id: productInDetail.product_id,
                product: productInDetail,
                quantity: 1,
                attributes: selectedAttributes,
            }),
        );
    };
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
                    <AddToCart onClick={handleAddToCart}>{isInCart ? 'Go to Cart' : 'Add to cart'}</AddToCart>
                </InteractiveContainer>
                <Reviews product_id={product_id} />
            </Container>
        </Modal>
    );
};

export default ProductDetails;
