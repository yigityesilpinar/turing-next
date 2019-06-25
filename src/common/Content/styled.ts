import styled from 'styled-components';
import { LOGO_WIDTH, MARGIN_FROM_SIDEBAR } from '@config/global';
import { BREAKPOINTS } from '@config/media';

export const Container = styled.div`
    display: flex;
    margin-left: ${LOGO_WIDTH + MARGIN_FROM_SIDEBAR}px;
    width: 80%;
    @media (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
        margin-left: auto;
        width: 100%;
        justify-content: center;
    }
`;
