import React from 'react';
import Link from 'next/link';

import { Container, BackButton, CheckoutButton } from './styled';

const ListHeader: React.FC = () => {
    return (
        <Container>
            <Link href="/">
                <BackButton>Back to Shop</BackButton>
            </Link>
            <CheckoutButton>Checkout</CheckoutButton>
        </Container>
    );
};

export default ListHeader;
