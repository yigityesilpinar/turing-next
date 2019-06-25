import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Container from '@common/PageContainer';
import SideBar from '@common/SideBar';
import Content from '@common/Content';
import Products from '@components/Products';
import Categories from '@components/Categories';
import Departments from '@components/Departments';
import { BREAKPOINTS } from '@config/media';
import { LOGO_WIDTH } from '@config/global';

const DepartmentsContainer = styled.div`
    display: none;
    @media (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
        display: flex;
        > * {
            flex-direction: column;
            > * {
                padding: 10px 0;
            }
        }
    }
`;

const StyledSideBar = styled(SideBar)`
    @media (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
        display: flex;
    }
    @media (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
        margin-left: 0;
        width: initial;
        flex-basis: 20%;
        justify-items: center;
        flex-wrap: wrap;
        position: initial;
    }
`;

const StyledContent = styled(Content)`
    @media (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
        margin-left: ${LOGO_WIDTH}px;
    }
    @media (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
        margin-left: auto;
    }
`;

function IndexPage() {
    return (
        <Container>
            <Head>
                <title>ShopMate</title>
            </Head>
            <StyledSideBar>
                <DepartmentsContainer>
                    <Departments />
                </DepartmentsContainer>
                <Categories />
            </StyledSideBar>
            <StyledContent>
                <Products />
            </StyledContent>
        </Container>
    );
}

export default IndexPage;
