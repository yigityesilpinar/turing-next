import React from 'react';

import { Container } from './styled';
import { IContent } from './types';

const Content: React.FC<IContent> = ({ className, children }) => (
    <Container className={className}>{children} </Container>
);

export default Content;
