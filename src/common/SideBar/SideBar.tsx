import React from 'react';

import { Container } from './styled';
import { ISideBar } from './types';

const SideBar: React.FC<ISideBar> = ({ className, children }) => (
    <Container className={className}>{children} </Container>
);

export default SideBar;
