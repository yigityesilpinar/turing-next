import styled from 'styled-components';

import CommonH2 from '@common/H2';
import CommonButton from '@common/Button';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 15px;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Heading = styled(CommonH2)`
    text-transform: capitalize;
`;

export const Total = styled(CommonH2)`
    color: ${({ theme }) => theme.colors.active};
    margin-left: auto;
`;

export const EmptyButton = styled(CommonButton)`
    width: 100px;
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: 10px;
`;
