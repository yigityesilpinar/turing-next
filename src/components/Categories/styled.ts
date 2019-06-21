import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Category = styled.span<IWithActiveProp>`
    cursor: pointer;
    user-select: none;
    padding-bottom: 16px;
    ${({ active, theme }) =>
        active &&
        css`
            color: ${theme.colors.active};
        `}
`;
