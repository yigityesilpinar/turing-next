import styled, { css } from 'styled-components';

import CommonH3 from '@common/H3';

export const Container = styled.div`
    display: flex;
    width: 22%;
`;

export const QuantityDisplay = styled(CommonH3)`
    padding: 5px 15px;
    margin: 0 5px;
    border: 1px solid ${({ theme }) => theme.colors.lighterGray};
`;

const commonStyles = css`
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.lighterGray};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.h2};
    border-radius: 50%;
    cursor: pointer;
`;

export const Increase = styled.span`
    ${commonStyles}
`;
export const Decrease = styled.span`
    ${commonStyles}
`;
