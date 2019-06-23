import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import Products from '@components/Products';
import Categories from '@components/Categories';
import { LOGO_HEIGHT, LOGO_WIDTH, MARGIN_FROM_SIDEBAR } from '@config/global';

const Container = styled.div`
    display: flex;
    padding-top: ${LOGO_HEIGHT}px;
`;
const Content = styled.div`
    display: flex;
    margin-left: ${LOGO_WIDTH + MARGIN_FROM_SIDEBAR}px;
    width: 80%;
`;

const SideBar = styled.div`
    display: flex;
    width: ${LOGO_WIDTH}px;
    position: fixed;
    > * {
        margin-left: 30px;
    }
`;
function IndexPage() {
    return (
        <Container>
            <Head>
                <title>ShopMate</title>
            </Head>
            <SideBar>
                <Categories />
            </SideBar>
            <Content>
                <Products />
            </Content>
        </Container>
    );
}

export default IndexPage;
