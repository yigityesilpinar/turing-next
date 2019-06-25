import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import { LOGO_HEIGHT, LOGO_WIDTH, MARGIN_FROM_SIDEBAR } from '@config/global';
import Checkout from '@components/Checkout';

const Container = styled.div`
    display: flex;
    padding-top: ${LOGO_HEIGHT}px;
`;

const Content = styled.div`
    display: flex;
    margin-left: ${LOGO_WIDTH + MARGIN_FROM_SIDEBAR}px;
    width: 80%;
`;

function CheckoutPage() {
    return (
        <Container>
            <Head>
                <title>Checkout</title>
            </Head>
            <Content>
                <Checkout />
            </Content>
        </Container>
    );
}

export default CheckoutPage;
