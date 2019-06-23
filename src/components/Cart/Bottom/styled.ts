import styled from 'styled-components';

import CommonButton from '@common/Button';
import { reverseBtnMixin } from '@common/Button/styled';

export const Container = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.lighterGray};
    padding: 30px 20px;
`;

export const BackButton = styled(CommonButton)`
    ${reverseBtnMixin}
`;
export const CheckoutButton = styled(CommonButton)`
    margin-left: auto;
`;
