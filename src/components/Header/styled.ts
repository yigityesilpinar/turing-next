import styled, { css } from 'styled-components';

import CommonLink from '@common/Link';
import { LOGO_HEIGHT, MARGIN_FROM_SIDEBAR } from '@config/global';

export const Link = styled(CommonLink)<IWithActiveProp>`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    &,
    :active,
    :visited {
        color: ${props => props.theme.colors.textHeader};
        :before {
            background: ${props => props.theme.colors.textHeader};
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
    z-index: 100;
    background-color: ${props => props.theme.colors.backgroundColor};
    align-items: center;
    position: fixed;
    top: 0;
    height: ${LOGO_HEIGHT}px;
`;
