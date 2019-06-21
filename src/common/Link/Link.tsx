import React from 'react';

import { Anchor } from './styled';
import { ILink } from './types';

const Link: React.FC<ILink> = ({ href, text, children, className, ...rest }) => {
    return (
        <Anchor href={href} className={className} {...rest}>
            {text ? ` ${text} ` : null}
            {children ? <> {children} </> : null}
        </Anchor>
    );
};

export default Link;
