import React from 'react';
import { HashLoader } from 'react-spinners';

import { Container, Heading } from './styled';
import Colors from '@theme/colors';

const Loader = () => (
    <Container>
        <Heading>Processing the payment...</Heading>
        <HashLoader color={Colors.green} />
    </Container>
);

export default Loader;
