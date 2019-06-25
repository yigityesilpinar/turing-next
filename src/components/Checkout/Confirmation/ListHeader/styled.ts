import styled, { css } from 'styled-components';

import CommonH3 from '@common/H3';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
    margin-bottom: 20px;
    padding: 5px 0;
    width: 100%;
    > * {
        width: 30%;
    }
`;

export const Heading = styled(CommonH3)<{ rightJustify?: boolean }>`
    color: ${({ theme }) => theme.colors.lightGray};
    ${({ rightJustify }) =>
        rightJustify &&
        css`
            justify-content: flex-end;
            display: flex;
        `}
`;
