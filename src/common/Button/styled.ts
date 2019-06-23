import styled, { css } from 'styled-components';

export const reverseBtnMixin = css`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.active};
`;

export const Btn = styled.button`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.active};
    font-size: ${({ theme }) => theme.fontSizes.normal};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-family: ${({ theme }) => theme.fonts.montserrat};
    border-radius: 25px;
    padding: 10px;
    width: 200px;
    cursor: pointer;
`;
