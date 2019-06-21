import React from 'react';

import { Input, Label, Required } from './styled';
import { IInput } from './types';

const TextInput: React.FC<IInput> = ({ className, hasError, required, label, type = 'text', ...rest }) => (
    <Label>
        {label}
        {required && <Required>*</Required>}
        <Input hasError={hasError} required={required} className={className} type={type} {...rest} />
    </Label>
);

export default TextInput;
