import styled, { css } from 'styled-components';

import CommonLink from '@common/Link';
import { LOGO_HEIGHT, MARGIN_FROM_SIDEBAR } from '@config/global';

export const Link = styled(CommonLink)<IWithActiveProp>`
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.topBar};
    &,
    :active,
    :visited {
        color: ${props => props.theme.colors.heading};
        :before {
            background: ${props => props.theme.colors.heading};
        }
    }
    margin-right: 80px;
    :first-of-type {
        margin-left: ${MARGIN_FROM_SIDEBAR}px;
    }

    ${({ active, theme }) =>
        active &&
        css`
            &,
            :active,
            :visited {
                color: ${theme.colors.active};
                :before {
                    background: ${theme.colors.active};
                }
            }
        `}
`;

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    z-index: ${({ theme }) => theme.layer.header};
    background-color: ${props => props.theme.colors.backgroundColor};
    align-items: center;
    position: fixed;
    top: 0;
    height: ${LOGO_HEIGHT}px;
`;
