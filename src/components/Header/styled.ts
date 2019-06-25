import styled from 'styled-components';

import { LOGO_HEIGHT, LOGO_WIDTH, MARGIN_FROM_SIDEBAR, MAX_APP_WIDTH } from '@config/global';
import { BREAKPOINTS } from '@config/media';

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: ${MAX_APP_WIDTH}px;
    z-index: ${({ theme }) => theme.layer.header};
    background-color: ${props => props.theme.colors.backgroundColor};
    align-items: center;
    position: fixed;
    top: 0;
    height: ${LOGO_HEIGHT}px;
`;

export const RigtMenu = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 100px;
    align-items: center;
    @media (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
        margin-right: 0;
    }
`;

export const DepartmentsContainer = styled.div`
    display: flex;
    width: 30%;
    margin-left: ${MARGIN_FROM_SIDEBAR}px;
    @media (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
        display: none;
    }
`;

export const LogoContainer = styled.div`

    width: 20%;
    svg{
    width: 100%;
    }
    @media (min-width: ${BREAKPOINTS.MOBILE_MAX}px) {
        svg {
            width: ${LOGO_WIDTH}px;
            height ${LOGO_HEIGHT}px;
        }
    }
`;
