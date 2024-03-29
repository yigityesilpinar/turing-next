import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import AddressForm from '@components/AddressForm';
import { IAppState } from '@store/rootReducer';
import authApi from '@api/auth';
import { filterFields } from '@components/AddressForm/utils';
import { setCheckoutStep } from '@store/checkout/actions';

import { Container, BackButton, BottomContainer, NextButton } from './styled';

const Delivery: React.FC = () => {
    const { customer, accessToken } = useSelector<IAppState, IAppState['customerStore']>(state => state.customerStore);
    const currentStep = useSelector<IAppState, IAppState['checoutStore']['step']>(state => state.checoutStore.step);
    const dispatch = useDispatch();
    const [error, setError] = useState<IErrorResponse | undefined>();
    if (!customer || currentStep !== 1) {
        return null;
    }

    const handleNextClick = async () => {
        const [, err] = await authApi.updateAddress(
            // @ts-ignore
            {
                ...filterFields(customer),
                shipping_region_id: customer.shipping_region_id,
            },
            accessToken,
        );
        if (err) {
            console.log(err);
            // validation error
            if (err.status === 400) {
                setError(err);
                return;
            }
            toast.error('Oops sorry we can not do this now!');
            return;
        }
        dispatch(setCheckoutStep(currentStep + 1));
    };

    return (
        <Container>
            <AddressForm error={error} setError={setError} />
            <BottomContainer>
                <Link href="/cart">
                    <BackButton>Back</BackButton>
                </Link>
                <NextButton onClick={handleNextClick}>Next</NextButton>
            </BottomContainer>
        </Container>
    );
};

export default Delivery;
