import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import { LOGO_HEIGHT } from '@config/global';

const Container = styled.div`
    display: flex;
    padding-top: ${LOGO_HEIGHT}px;
`;

function IndexPage() {
    return (
        <Container>
            <Head>
                <title>Profile</title>
            </Head>
        </Container>
    );
}

export default IndexPage;
