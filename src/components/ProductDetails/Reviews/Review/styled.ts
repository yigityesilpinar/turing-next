import styled from 'styled-components';

import CommonText from '@common/Text';

export const Container = styled.div`
    display: flex;
    flex-basis: 100%;
    flex-wrap: wrap;
    padding: 20px 0;
    border-bottom: 2px solid #e5e5e5;
`;

export const Time = styled(CommonText)`
    padding: 0 10px;
`;

export const Reviewer = styled(CommonText)`
    color: ${({ theme }) => theme.colors.heading};
`;

export const ReviewText = styled(CommonText)`
    flex-basis: 100%;
    padding-top: 10px;
`;

export const StarsContainer = styled.div`
    display: flex;
    align-items: center;
`;
