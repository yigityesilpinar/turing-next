import styled from 'styled-components';

export const Heading = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.normal};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.heading};
    line-height: 150%;
`;
