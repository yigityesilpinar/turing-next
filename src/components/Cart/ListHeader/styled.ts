import styled, { css } from 'styled-components';

import CommonH3 from '@common/H3';

export const Container = styled.div`
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
    margin-bottom: 20px;
    padding: 5px 0;
`;

export const RightContainer = styled.div`
    display: flex;
    width: 65%;
    justify-content: space-between;
`;

export const Heading = styled(CommonH3)<{ width: string; rightJustify?: boolean }>`
    color: ${({ theme }) => theme.colors.lightGray};
    width: ${({ width }) => width};
    ${({ rightJustify }) =>
        rightJustify &&
        css`
            justify-content: flex-end;
            display: flex;
        `}
`;
