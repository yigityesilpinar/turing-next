import React from 'react';
import Link from 'next/link';

import { Container } from './styled';
const Auth: React.FC = () => (
    <Link href="/cart">
        <Container>basket</Container>
    </Link>
);

export default Auth;
