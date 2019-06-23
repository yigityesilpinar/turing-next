import React from 'react';

import { Container, Heading, RightContainer } from './styled';

const ListHeader: React.FC = () => {
    return (
        <Container>
            <Heading width="35%">Item</Heading>
            <RightContainer>
                <Heading width="22%">Attributes</Heading>
                <Heading width="22%">Quantity</Heading>
                <Heading width="22%" rightJustify>
                    Price
                </Heading>
                <Heading width="22%" rightJustify>
                    Sub Total
                </Heading>
            </RightContainer>
        </Container>
    );
};

export default ListHeader;
