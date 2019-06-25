import React from 'react';
import Head from 'next/head';

import Container from '@common/PageContainer';
import SideBar from '@common/SideBar';
import Content from '@common/Content';
import Profile from '@components/Profile';

function IndexPage() {
    return (
        <Container>
            <Head>
                <title>Profile</title>
            </Head>
            <SideBar />
            <Content>
                <Profile />
            </Content>
        </Container>
    );
}

export default IndexPage;
