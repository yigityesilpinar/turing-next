import styled, { css } from 'styled-components';

export const Input = styled.textarea<{ hasError?: boolean }>`
    border: 1px solid #e1e1e1;
    color: ${({ theme }) => theme.colors.text};
    padding: 20px;
    width: calc(100% - 40px);
    height: 100px;
    flex-basis: 100%;
    line-height: 150%;
    ${({ hasError, theme }) =>
        hasError &&
        css`
            border-color: ${theme.colors.error};
        `}
`;
