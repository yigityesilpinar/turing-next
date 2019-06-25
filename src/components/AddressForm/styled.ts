import styled from 'styled-components';

import CommonTextInput from '@common/TextInput';
import { Label } from '@common/TextInput/styled';
import CommonText from '@common/Text';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 20px;
    ${Label} {
        flex-basis: 40%;
        padding-right: 5%;
        margin-bottom: 20px;
    }
`;

export const TextInput = styled(CommonTextInput)`
    padding-bottom: 10px;
`;

export const Error = styled(CommonText)`
    color: ${({ theme }) => theme.colors.error};
`;
