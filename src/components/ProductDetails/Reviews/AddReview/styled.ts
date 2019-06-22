import styled from 'styled-components';

import CommonTextArea from '@common/TextArea';
import CommonButton from '@common/Button';

export const Container = styled.div`
    display: flex;
    flex-basis: 100%;
    flex-wrap: wrap;
    padding: 20px 0;
`;

export const StarsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-basis: 100%;
    padding-bottom: 10px;
`;

export const TextArea = styled(CommonTextArea)`
    margin-bottom: 10px;
`;

export const Button = styled(CommonButton)``;
