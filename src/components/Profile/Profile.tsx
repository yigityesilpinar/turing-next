import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { toast } from 'react-toastify';

import AddressForm from '@components/AddressForm';
import { IAppState } from '@store/rootReducer';
import authApi from '@api/auth';
import { filterFields } from '@components/AddressForm/utils';
import useLoggedInOnly from '@hooks/useLoggedInOnly';

import { Container, BackButton, BottomContainer, UpdateButton, Heading } from './styled';

const Profile: React.FC = () => {
    useLoggedInOnly('/');
    const { customer, accessToken } = useSelector<IAppState, IAppState['customerStore']>(state => state.customerStore);
    const [error, setError] = useState<IErrorResponse | undefined>();
    if (!customer) {
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
            // validation error
            if (err.status === 400) {
                setError(err);
                return;
            }
            toast.error('Oops sorry we can not do this now!');
            return;
        }
        toast.success('Your profile data Successfuly updated');
    };

    return (
        <Container>
            <Heading>Update Profile Info</Heading>
            <AddressForm error={error} setError={setError} />
            <BottomContainer>
                <Link href="/">
                    <BackButton>Back to Shopping</BackButton>
                </Link>
                <UpdateButton onClick={handleNextClick}>Update</UpdateButton>
            </BottomContainer>
        </Container>
    );
};

export default Profile;
