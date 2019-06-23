import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Router from 'next/router';

import { PRODUCT_IMAGE_PATH } from '@config/global';
import { IAppState } from '@store/rootReducer';
import { setProductInDetail } from '@store/products/actions';
import Price from '@common/Price';
import cartApi from '@api/cart';

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
import { setCart, setCartID } from '@store/cart/actions';

const ProductDetails: React.FC = () => {
    const productInDetail = useSelector<IAppState, IAppState['productStore']['productInDetail']>(
        state => state.productStore.productInDetail,
    );
    const selectedAttributes = useSelector<IAppState, IAppState['attributesStore']['attributes']>(
        state => state.attributesStore.attributes,
    );
    const cartIDFromStore = useSelector<IAppState, IAppState['cartStore']['cart_id']>(state => state.cartStore.cart_id);
    const dispatch = useDispatch();
    if (!productInDetail) {
        return null;
    }
    const onCloseClick = () => dispatch(setProductInDetail(null));
    const { name, discounted_price, price, thumbnail, description, product_id } = productInDetail;

    const handleAddToCart = async () => {
        const addToCart = async (cart_id: ICartIDResponse['cart_id']) => {
            const [res, err] = await cartApi.addToCart({
                attributes: selectedAttributes.map(attr => attr.attribute_value).join(' '),
                cart_id,
                product_id,
            });
            if (res && res.length && !err) {
                toast.success('Added To Cart, CLICK TO GO TO CART', {
                    onClick: () => {
                        Router.push('/cart');
                    },
                });
                dispatch(setProductInDetail(null));
                dispatch(setCart(res));
            } else {
                dispatch(setCartID(''));
                toast.error("Ooops sorry, we can't handle your request at the moment!");
            }
        };
        if (!cartIDFromStore) {
            const [response, err] = await cartApi.generateCartID();
            if (!response || err) {
                toast.error("Ooops sorry, we can't handle your request at the moment!");
                return;
            }
            dispatch(setCartID(response.cart_id));
            addToCart(response.cart_id);
        } else {
            addToCart(cartIDFromStore);
        }
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
                    <AddToCart onClick={handleAddToCart}>Add to Cart</AddToCart>
                </InteractiveContainer>
                <Reviews product_id={product_id} />
            </Container>
        </Modal>
    );
};

export default ProductDetails;
