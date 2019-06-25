import styled from 'styled-components';

import CommonH2 from '@common/H2';
import CommonText from '@common/Text';
import CommonImage from '@common/Image';
import { BREAKPOINTS } from '@config/media';

export const Container = styled.div`
    display: flex;
    padding-bottom: 28px;
    width: 100%;
    @media (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
        flex-direction: column;
    }
`;

export const LeftContainer = styled.div`
    display: flex;
    width: 35%;
    @media (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
        flex-direction: column;
        width: initial;
    }
    align-items: center;
`;

export const RightContainer = styled.div`
    display: flex;
    width: 65%;
    justify-content: space-between;
    align-items: center;
    @media (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
        flex-direction: column;
        width: initial;
    }
`;

export const AttributesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 22%;
    @media (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
        width: initial;
    }
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
    @media (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
        width: initial;
    }
`;

export const SubTotal = styled(Price)`
    color: ${({ theme }) => theme.colors.active};
    @media (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
        width: initial;
    }
`;

export const Text = CommonText;

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
