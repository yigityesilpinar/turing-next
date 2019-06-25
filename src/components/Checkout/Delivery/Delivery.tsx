import React from 'react';

import AddressForm from './AddressForm';

import { Container } from './styled';

const Delivery: React.FC = () => {
    return (
        <Container>
            <AddressForm />
        </Container>
    );
};

export default Delivery;
