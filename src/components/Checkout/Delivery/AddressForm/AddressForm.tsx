import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Link from 'next/link';

import { IAppState } from '@store/rootReducer';
import authApi from '@api/auth';
import { setCustomer, updateCustomer } from '@store/customer/actions';

import { Container, TextInput, BackButton, BottomContainer, NextButton, Error } from './styled';
import { textFileds, aliases } from './static';
import { setCheckoutStep } from '@store/checkout/actions';

const filterFields = (customer: ICustomer) => {
    let fields = {};
    textFileds.forEach(key => {
        //@ts-ignore
        fields[key] = customer[key] || '';
    });
    return fields;
};

const AddressForm: React.FC = () => {
    const { customer, accessToken } = useSelector<IAppState, IAppState['customerStore']>(state => state.customerStore);
    const [error, setError] = useState<IErrorResponse | undefined>();
    const currentStep = useSelector<IAppState, IAppState['checoutStore']['step']>(state => state.checoutStore.step);
    const dispatch = useDispatch();
    useEffect(() => {
        if (customer && !customer.hasOwnProperty('country')) {
            authApi.getCustomer(accessToken).then(([res]) => {
                if (res) {
                    dispatch(setCustomer(res));
                }
            });
        }
    }, [customer]);
    if (!customer || currentStep !== 1) {
        return null;
    }
    const handleChange = (fieldName: keyof typeof customer) => (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        if (error) {
            setError(undefined);
        }
        dispatch(
            updateCustomer({
                [fieldName]: e.target.value,
            }),
        );
    };
    const hasError = (fieldName: keyof typeof customer) => error && error.field.includes(fieldName);
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
            {textFileds.map(field => (
                <TextInput
                    key={field}
                    // @ts-ignore
                    value={customer[field] || ''}
                    // @ts-ignore
                    onChange={handleChange(field)}
                    // @ts-ignore
                    label={aliases[field] || field}
                    // @ts-ignore
                    hasError={hasError(field)}
                    required
                />
            ))}

            {error && <Error>{error.message}</Error>}
            <BottomContainer>
                <Link href="/cart">
                    <BackButton>Back</BackButton>
                </Link>
                <NextButton onClick={handleNextClick}>Next</NextButton>
            </BottomContainer>
        </Container>
    );
};

export default AddressForm;
