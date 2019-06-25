import styled from 'styled-components';

import CommonButton from '@common/Button';
import CommonText from '@common/Text';
import CommonH2 from '@common/H2';
import CommonH3 from '@common/H3';

import { reverseBtnMixin } from '@common/Button/styled';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: space-between;
`;

export const ListContainer = styled.div`
    display: flex;
    width: 60%;
    flex-wrap: wrap;
`;

export const AddressContainer = styled.div`
    display: flex;
    width: 30%;
    flex-direction: column;
`;
export const Address = styled(CommonText)``;

export const BottomContainer = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.lighterGray};
    padding: 30px 20px;
    flex-basis: 100%;
`;

export const BackButton = styled(CommonButton)`
    ${reverseBtnMixin}
`;
export const NextButton = styled(CommonButton)`
    margin-left: auto;
`;

export const Total = styled(CommonH2)`
    margin-left: auto;
`;

export const Heading = styled(CommonH3)`
    color: ${({ theme }) => theme.colors.lightGray};
`;
