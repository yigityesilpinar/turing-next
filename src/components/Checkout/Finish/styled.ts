import styled from 'styled-components';

import CommonButton from '@common/Button';
import CommonH1 from '@common/H1';
import CommonText from '@common/Text';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 45px 0;
`;

export const FinishButton = styled(CommonButton)`
    margin: 45px 0;
    padding: 25px;
    width: 235px;
    border-radius: 50px;
`;

export const Heading = styled(CommonH1)`
    margin: 16px 0;
`;

export const Text = styled(CommonText)`
    max-width: 300px;
`;
