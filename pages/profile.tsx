import React from 'react';
import Head from 'next/head';

import Container from '@common/PageContainer';
import SideBar from '@common/SideBar';
import Content from '@common/Content';

function IndexPage() {
    return (
        <Container>
            <Head>
                <title>Profile</title>
            </Head>
            <SideBar />
            <Content>Profile Page</Content>
        </Container>
    );
}

export default IndexPage;
