import styled, { css } from 'styled-components';

import CommonImage from '@common/Image';
import CommonLink from '@common/Link';

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 0;
    border-bottom: 2px solid #e5e5e5;
`;

export const Side = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

export const Image = styled(CommonImage)`
    width: 120px;
`;
export const Description = styled.span``;
export const Name = styled.span``;
export const Price = styled.span<IWithActiveProp>`
    ${({ active, theme }) =>
        active
            ? css`
                  font-size: ${theme.fontSizes.h2};
                  font-weight: ${theme.fontWeights.bold};
                  color: ${theme.colors.active};
              `
            : css`
                  text-decoration: line-through;
              `};
`;
export const Link = CommonLink;
