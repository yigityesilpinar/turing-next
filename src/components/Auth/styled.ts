import styled, { css } from 'styled-components';

import CommonModal from '@common/Modal';

const commonTextStyleMixin = css`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.active};
    margin: 0 5px;
`;

export const Modal = styled(CommonModal)``;

export const Container = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 100px;
`;

export const Text = styled.span`
    ${commonTextStyleMixin}
`;

export const AuthLink = styled.span`
    cursor: pointer;
    ${commonTextStyleMixin}
`;
