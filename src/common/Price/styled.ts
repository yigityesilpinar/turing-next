import styled, { css } from 'styled-components';

export const Container = styled.span<IWithActiveProp>`
    padding-bottom: 24px;
    ${({ active, theme }) =>
        active
            ? css`
                  font-size: ${theme.fontSizes.h2};
                  font-weight: ${theme.fontWeights.bold};
                  color: ${theme.colors.active};
              `
            : css`
                  text-decoration: line-through;
                  padding-left: 10px;
              `};
`;
