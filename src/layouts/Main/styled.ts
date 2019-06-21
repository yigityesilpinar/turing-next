import styled, { createGlobalStyle } from 'styled-components';

import reset from '@utils/style/reset';
export const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Montserrat:700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:700&display=swap');
  html { 
    overflow-y: scroll; 
    font-family: ${({ theme }) => theme.fonts.default};
    font-size: ${({ theme }) => theme.fontSizes.normal};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.text};
    line-height: 150%;
  }

`;

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
