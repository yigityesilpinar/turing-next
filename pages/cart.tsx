import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import { LOGO_HEIGHT, LOGO_WIDTH, MARGIN_FROM_SIDEBAR } from '@config/global';
import Cart from '@components/Cart';

const Container = styled.div`
    display: flex;
    padding-top: ${LOGO_HEIGHT}px;
`;
const Content = styled.div`
    display: flex;
    margin-left: ${LOGO_WIDTH + MARGIN_FROM_SIDEBAR}px;
    width: 80%;
`;

function CartPage() {
    return (
        <Container>
            <Head>
                <title>My Cart</title>
            </Head>
            <Content>
                <Cart />
            </Content>
        </Container>
    );
}

export default CartPage;
