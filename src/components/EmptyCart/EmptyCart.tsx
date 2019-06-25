import React from 'react';
import Link from 'next/link';

import { Container, Heading, BackButton } from './styled';

const EmptyCart: React.FC = () => {
    return (
        <Container>
            <Heading>There are no items on the cart</Heading>
            <Link href="/">
                <BackButton>Go back to shopping</BackButton>
            </Link>
        </Container>
    );
};

export default EmptyCart;
