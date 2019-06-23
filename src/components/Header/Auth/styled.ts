import styled, { css } from 'styled-components';

import CommonImage from '@common/Image';

const commonTextStyleMixin = css`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.active};
    margin: 0 5px;
`;

export const Container = styled.div`
    display: flex;
`;

export const Text = styled.span`
    ${commonTextStyleMixin}
`;

export const AuthLink = styled.span`
    cursor: pointer;
    ${commonTextStyleMixin}
`;

export const ProfileIcon = styled(CommonImage)`
    cursor: pointer;
    margin-right: 10px;
`;
