import React from 'react';

import { Img } from './styled';
import { IImage } from './types';

const Image: React.FC<IImage> = ({ className, ...rest }) => <Img className={className} {...rest} />;

export default Image;
