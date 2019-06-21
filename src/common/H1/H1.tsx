import React from 'react';

import { Heading } from './styled';
import { IH1 } from './types';

const H1: React.FC<IH1> = ({ className, ...rest }) => <Heading className={className} {...rest} />;

export default H1;
