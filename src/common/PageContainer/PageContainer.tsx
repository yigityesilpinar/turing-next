import React from 'react';

import { Container } from './styled';
import { IPageContainer } from './types';

const PageContainer: React.FC<IPageContainer> = ({ className, children }) => (
    <Container className={className}>{children} </Container>
);

export default PageContainer;
