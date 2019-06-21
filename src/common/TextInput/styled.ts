import styled, { css } from 'styled-components';

export const Input = styled.input<{ hasError?: boolean }>`
    border: 1px solid #e1e1e1;
    color: ${({ theme }) => theme.colors.text};
    padding: 0 20px;
    width: calc(100% - 40px);
    height: 48px;
    flex-basis: 100%;
    ${({ hasError, theme }) =>
        hasError &&
        css`
            border-color: ${theme.colors.error};
        `}
`;

export const Label = styled.label`
    display: flex;
    text-transform: capitalize;
    flex-wrap: wrap;
    line-height: 2;
`;

export const Required = styled.span`
    padding-left: 10px;
    color: ${({ theme }) => theme.colors.active};
`;
