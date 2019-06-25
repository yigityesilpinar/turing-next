import styled from 'styled-components';

import CommonH2 from '@common/H2';
import CommonText from '@common/Text';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 28px;
    width: 100%;
    > * {
        width: 30%;
    }
`;

export const Price = styled(CommonH2)`
    justify-content: flex-end;
    display: flex;
    color: ${({ theme }) => theme.colors.active};
`;

export const Name = CommonText;
export const Quantity = CommonText;
