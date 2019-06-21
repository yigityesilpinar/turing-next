import React from 'react';

import { Span } from './styled';
import { IParagraph } from './types';

const indent = 4;
const indentArray = Array.from(Array(indent), (_v, i) => i + 1);
const Space = () => <>&nbsp;</>;
const addIndent = (content: string | React.ReactNode) =>
    content ? (
        <>
            {indentArray.map(i => (
                <Space key={i} />
            ))}
            {content}
        </>
    ) : null;
const Paragraph: React.FC<IParagraph> = ({ className, children, text, ...rest }) => (
    <Span className={className} {...rest}>
        {addIndent(text)}
        {addIndent(children)}
    </Span>
);

export default Paragraph;
