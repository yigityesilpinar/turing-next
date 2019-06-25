import React from 'react';

import { Container, Heading } from './styled';

const ListHeader: React.FC = () => {
    return (
        <Container>
            <Heading>Item</Heading>
            <Heading>Quantity</Heading>
            <Heading rightJustify>Price</Heading>
        </Container>
    );
};

export default ListHeader;
