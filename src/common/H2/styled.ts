import styled from 'styled-components';

export const Heading = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.h2};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.heading};
    line-height: 150%;
    padding-bottom: 10px;
`;
