import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IAppState } from '@store/rootReducer';
import { setCheckoutStep } from '@store/checkout/actions';
import cartApi from '@api/cart';

import { CURRENCY } from '@config/global';

import {
    Container,
    BackButton,
    BottomContainer,
    NextButton,
    Total,
    ListContainer,
    Address,
    AddressContainer,
    Heading,
} from './styled';
import Item from './Item';
import ListHeader from './ListHeader';

const Confirmation: React.FC = () => {
    const dispatch = useDispatch();
    const customer = useSelector<IAppState, IAppState['customerStore']['customer']>(
        state => state.customerStore.customer,
    );
    const { items, cart_id } = useSelector<IAppState, IAppState['cartStore']>(state => state.cartStore);
    const currentStep = useSelector<IAppState, IAppState['checoutStore']['step']>(state => state.checoutStore.step);
    const [total, setTotal] = useState('');

    const handleNextClick = () => dispatch(setCheckoutStep(currentStep + 1));
    const handleBackClick = () => dispatch(setCheckoutStep(currentStep - 1));
    useEffect(() => {
        if (cart_id) {
            cartApi.getTotalAmount(cart_id).then(([res, err]) => {
                if (res && !err) {
                    setTotal(res.total_amount);
                }
            });
        }
    }, [cart_id]);

    if (!items.length || !customer || currentStep !== 2) {
        return null;
    }

    return (
        <Container>
            <ListContainer>
                <ListHeader />
                {items.map(item => (
                    <Item key={item.item_id} {...item} />
                ))}
                <Total>
                    TOTAL {CURRENCY}
                    {total}
                </Total>
            </ListContainer>
            <AddressContainer>
                <Heading>Address</Heading>
                <Address>
                    {customer.address_1} {customer.address_2}
                </Address>
            </AddressContainer>
            <BottomContainer>
                <BackButton onClick={handleBackClick}>Back</BackButton>
                <NextButton onClick={handleNextClick}>Next</NextButton>
            </BottomContainer>
        </Container>
    );
};

export default Confirmation;
