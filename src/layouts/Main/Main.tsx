import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@config/theme';

import { GlobalStyle, LayoutContainer } from './styled';

const MainLayout: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <LayoutContainer>{children}</LayoutContainer>
        </>
    </ThemeProvider>
);

export default MainLayout;
