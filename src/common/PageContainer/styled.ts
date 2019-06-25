import styled from 'styled-components';
import { LOGO_HEIGHT } from '@config/global';
import { BREAKPOINTS } from '@config/media';

export const Container = styled.div`
    display: flex;
    padding-top: ${LOGO_HEIGHT}px;
    flex-wrap: wrap;
    @media (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
        flex-wrap: nowrap;
    }
`;
