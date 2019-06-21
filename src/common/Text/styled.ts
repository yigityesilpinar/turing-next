import styled, { css } from 'styled-components';

export const Span = styled.span<{ small?: boolean }>`
    line-height: 150%;
    ${({ small, theme }) =>
        small &&
        css`
            font-size: ${theme.fontSizes.small};
            line-height: 200%;
        `}
`;
