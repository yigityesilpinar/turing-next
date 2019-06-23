import styled from 'styled-components';

import CommonH2 from '@common/H2';
import CommonText from '@common/Text';
import CommonImage from '@common/Image';

export const Container = styled.div`
    display: flex;
    padding-bottom: 28px;
    width: 100%;
`;

export const LeftContainer = styled.div`
    display: flex;
    width: 35%;
    align-items: center;
`;

export const RightContainer = styled.div`
    display: flex;
    width: 65%;
    justify-content: space-between;
    align-items: center;
`;

export const AttributesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 22%;
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 24px;
`;

export const Price = styled(CommonH2)`
    width: 22%;
    justify-content: flex-end;
    display: flex;
`;

export const SubTotal = styled(Price)`
    color: ${({ theme }) => theme.colors.active};
`;

export const Text = styled(CommonText)``;

export const Image = styled(CommonImage)`
    height: 96px;
`;

export const CloseIcon = styled(CommonImage)`
    width: 20px;
    height: 20px;
`;

export const RemoveBtn = styled.span`
    display: flex;
    color: #a6a6a6;
    cursor: pointer;
`;
