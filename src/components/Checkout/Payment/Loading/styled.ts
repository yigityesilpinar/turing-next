import styled from 'styled-components';

import CommonH2 from '@common/H2';

export const Heading = styled(CommonH2)`
    color: ${({ theme }) => theme.colors.green};
`;

export const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: ${({ theme }) => theme.layer.modal};
    background-color: rgba(0, 0, 0, 0.5);
`;
