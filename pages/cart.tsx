import React from 'react';
import Head from 'next/head';

import Container from '@common/PageContainer';
import SideBar from '@common/SideBar';
import Content from '@common/Content';
import Cart from '@components/Cart';

function CartPage() {
    return (
        <Container>
            <Head>
                <title>My Cart</title>
            </Head>
            <SideBar />
            <Content>
                <Cart />
            </Content>
        </Container>
    );
}

export default CartPage;
