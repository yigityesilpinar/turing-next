import React from 'react';

import { Input } from './styled';
import { IInput } from './types';

const TextArea: React.FC<IInput> = ({ className, hasError, ...rest }) => (
    <Input hasError={hasError} className={className} {...rest} />
);

export default TextArea;
