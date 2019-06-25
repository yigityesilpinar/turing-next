import styled from 'styled-components';

import CommonH2 from '@common/H2';
import CommonButton from '@common/Button';
import { reverseBtnMixin } from '@common/Button/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 15px;
`;

export const Heading = styled(CommonH2)`
    text-transform: capitalize;
`;

export const BackButton = styled(CommonButton)`
    ${reverseBtnMixin}
`;
