import React from 'react';

import { Heading } from './styled';
import { IH2 } from './types';

const H2: React.FC<IH2> = ({ className, ...rest }) => <Heading className={className} {...rest} />;

export default H2;
