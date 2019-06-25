import React from 'react';
import Head from 'next/head';

import Container from '@common/PageContainer';
import SideBar from '@common/SideBar';
import Content from '@common/Content';
import Checkout from '@components/Checkout';

function CheckoutPage() {
    return (
        <Container>
            <Head>
                <title>Checkout</title>
            </Head>
            <SideBar />
            <Content>
                <Checkout />
            </Content>
        </Container>
    );
}

export default CheckoutPage;
