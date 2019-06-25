import styled from 'styled-components';
import { LOGO_WIDTH } from '@config/global';
import { BREAKPOINTS } from '@config/media';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${LOGO_WIDTH}px;
    position: fixed;
    > * {
        margin-left: 30px;
    }
    @media (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
        display: none;
    }
`;
