import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactStripeElements, CardElement } from 'react-stripe-elements';
import Router from 'next/router';
import { animateScroll } from 'react-scroll';

import { IAppState } from '@store/rootReducer';
import { setCheckoutStep } from '@store/checkout/actions';
import Colors from '@theme/colors';
import { setCart } from '@store/cart/actions';
import cartApi from '@api/cart';

import {
    Container,
    BackButton,
    BottomContainer,
    NextButton,
    FormContainer,
    FormElementContainer,
    Label,
    Info,
    Image,
    Completed,
    CardWrapper,
} from './styled';
import { handleStripeCharge } from './utils';
import Loading from './Loading';

type InjectedProps = ReactStripeElements.InjectedStripeProps;

const Payment: React.FC = props => {
    const dispatch = useDispatch();
    const [completed, setCompleted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { customer, accessToken } = useSelector<IAppState, IAppState['customerStore']>(state => state.customerStore);
    const { cart_id, items } = useSelector<IAppState, IAppState['cartStore']>(state => state.cartStore);
    const currentStep = useSelector<IAppState, IAppState['checoutStore']['step']>(state => state.checoutStore.step);
    const isMobile = useSelector<IAppState, IAppState['appStore']['isMobile']>(state => state.appStore.isMobile);

    const cancel = () => {
        dispatch(setCart([]));
        dispatch(setCheckoutStep(1));
        Router.push('/cart');
    };
    const handlePay = async () => {
        const { stripe } = props as InjectedProps;
        const loaderTimeout = setTimeout(() => setLoading(true), 500);
        const result = await handleStripeCharge({
            stripe,
            accessToken,
            cart_id,
        });
        clearTimeout(loaderTimeout);
        setLoading(false);
        if (isMobile) {
            animateScroll.scrollToTop({
                smooth: true,
            });
        }
        if (result === 'charge_error') {
            // looks like cart is emptied after error
            // ADD BACK ITEM TO THE CART
            let promises: Promise<any>[] = [];
            items.forEach(item => {
                for (let i = 0; i < item.quantity; i++) {
                    promises.push(
                        cartApi.addToCart({
                            product_id: item.product_id,
                            attributes: item.attributes,
                            cart_id,
                        }),
                    );
                }
            });
            try {
                await Promise.all(promises);
            } catch (e) {
                // something went wrong during adding old items the items
                cancel();
                return;
            }

            const [itemsRes, itemsErr] = await cartApi.getItemsInCart(cart_id);
            if (!itemsRes || !itemsRes.length || itemsErr) {
                // something went wrong during recovering the items
                cancel();
                return;
            }
            // recover items
            dispatch(setCart(itemsRes));
            return;
        }
        if (result) {
            dispatch(setCheckoutStep(currentStep + 1));
            dispatch(setCart([]));
        }
    };
    const handleBackClick = () => dispatch(setCheckoutStep(currentStep - 1));
    const handleCardChange = (cardState: ReactStripeElements.ElementChangeResponse) => {
        if (completed !== cardState.complete) {
            setCompleted(cardState.complete);
        }
    };
    if (!customer || currentStep !== 3) {
        return null;
    }

    return (
        <Container>
            {loading && <Loading />}
            <FormContainer>
                <FormElementContainer>
                    <Label>Card Number</Label>
                    <CardWrapper completed={completed}>
                        <CardElement
                            style={{
                                base: {
                                    fontSize: isMobile ? '20px' : '30px',
                                    iconColor: Colors.green,
                                    color: Colors.black,
                                },
                            }}
                            onChange={handleCardChange}
                        />
                    </CardWrapper>
                    <Completed completed={completed}>
                        {completed ? 'Ready for payment' : 'Please fill all necessary fields'}
                    </Completed>
                </FormElementContainer>
                <Info>
                    * CVV or CVC is the car security code, unique three digit number on the back of your card separate
                    from its number.
                    <Image width={68} height={23} src="/static/images/visa.png" />
                    <Image width={63} height={41} src="/static/images/mastercard.png" />
                </Info>
            </FormContainer>
            <BottomContainer>
                <BackButton onClick={handleBackClick}>Back</BackButton>
                <NextButton onClick={handlePay}>Pay</NextButton>
            </BottomContainer>
        </Container>
    );
};

export default Payment;
