import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IAppState } from '@store/rootReducer';
import authApi from '@api/auth';
import { setCustomer, updateCustomer } from '@store/customer/actions';
import { IAddressForm } from '@components/AddressForm/types';

import { Container, TextInput, Error } from './styled';
import { textFileds, aliases } from './static';

const AddressForm: React.FC<IAddressForm> = ({ error, setError }) => {
    const { customer, accessToken } = useSelector<IAppState, IAppState['customerStore']>(state => state.customerStore);
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
    if (!customer) {
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
        </Container>
    );
};

export default AddressForm;
