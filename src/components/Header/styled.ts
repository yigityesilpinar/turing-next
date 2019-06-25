import styled from 'styled-components';

import { LOGO_HEIGHT } from '@config/global';

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

export const RigtMenu = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 100px;
    align-items: center;
`;
