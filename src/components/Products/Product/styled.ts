import styled from 'styled-components';

import CommonImage from '@common/Image';
import CommonH3 from '@common/H3';
import CommonText from '@common/Text';

export const Container = styled.div`
    display: flex;
    flex-basis: 30%;
    justify-content: flex-start;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > * {
        margin: 10px auto;
    }
`;

export const Image = styled(CommonImage)`
    width: 120px;
`;
export const Name = styled(CommonH3)``;
export const Description = styled(CommonText)`
    width: 80%;
`;

export const PriceContainer = styled.div`
    display: flex;
`;
