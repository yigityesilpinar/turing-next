import React from 'react';

import { Btn } from './styled';
import { IButton } from './types';

const Button: React.FC<IButton> = ({ className, ...rest }) => <Btn className={className} {...rest} />;

export default Button;
