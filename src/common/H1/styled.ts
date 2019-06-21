import styled from 'styled-components';

export const Heading = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.h1};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-family: ${({ theme }) => theme.fonts.playfair};
    color: ${({ theme }) => theme.colors.heading};
    line-height: 150%;
`;
