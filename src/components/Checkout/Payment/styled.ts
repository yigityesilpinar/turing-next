import styled, { css } from 'styled-components';

import CommonButton from '@common/Button';
import CommonImage from '@common/Image';
import CommonText from '@common/Text';
import CommonH3 from '@common/H3';
import { reverseBtnMixin } from '@common/Button/styled';
import { BREAKPOINTS } from '@config/media';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: space-between;
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
export const NextButton = styled(CommonButton)`
    margin-left: auto;
`;

export const FormContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 30px 0;
`;

export const FormElementContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 45%;
    margin: 20px 0;
    @media (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
        flex-basis: 100%;
    }
`;

export const CardWrapper = styled.div<{ completed: boolean }>`
    ${({ completed }) =>
        completed
            ? css`
                  border-bottom: 2px solid ${props => props.theme.colors.green};
              `
            : css`
                  border-bottom: 2px solid ${props => props.theme.colors.red};
              `}
`;

export const Label = CommonText;

export const Info = styled(CommonH3)`
    display: flex;
    font-size: ${props => props.theme.fontSizes.small};
    align-items: center;
    margin-right: 20px;
    flex-basis: 45%;
    @media (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
        flex-basis: 100%;
    }
`;

export const Completed = styled(CommonH3)<{ completed: boolean }>`
    margin-top: 10px;
    ${({ completed }) =>
        completed
            ? css`
                  color: ${props => props.theme.colors.green};
              `
            : css`
                  color: ${props => props.theme.colors.red};
              `}
`;

export const Image = styled(CommonImage)`
    align-self: center;
    height: initial;
`;
