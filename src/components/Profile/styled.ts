import styled from 'styled-components';

import CommonButton from '@common/Button';
import { reverseBtnMixin } from '@common/Button/styled';
import CommonH2 from '@common/H2';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

export const BottomContainer = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.lighterGray};
    padding: 30px 20px;
    flex-basis: 100%;
`;

export const BackButton = styled(CommonButton)`
    ${reverseBtnMixin}
`;
export const UpdateButton = styled(CommonButton)`
    margin-left: auto;
`;

export const Heading = styled(CommonH2)`
    margin-bottom: 30px;
`;
