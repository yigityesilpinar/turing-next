import styled, { createGlobalStyle } from 'styled-components';

import reset from '@utils/style/reset';
export const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');
  html { 
     overflow-y: scroll; 
  }
`;

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.fonts.default};
    font-size: ${({ theme }) => theme.fontSizes.normal};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
`;
