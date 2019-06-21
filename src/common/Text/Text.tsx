import React from 'react';

import { Span } from './styled';
import { IText } from './types';

const Text: React.FC<IText> = ({ className, ...rest }) => <Span className={className} {...rest} />;

export default Text;
