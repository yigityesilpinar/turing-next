import React from 'react';

import { Heading } from './styled';
import { IH3 } from './types';

const H3: React.FC<IH3> = ({ className, ...rest }) => <Heading className={className} {...rest} />;

export default H3;
