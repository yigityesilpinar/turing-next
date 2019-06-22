import styled from 'styled-components';

import CommonTextInput from '@common/TextInput';
import CommonText from '@common/Text';
import CommonButton from '@common/Button';
import CommonH2 from '@common/H2';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

// TODO check/remove all empty styles )``
export const TextInput = styled(CommonTextInput)`
    padding-bottom: 10px;
`;

export const Text = styled(CommonText)`
    margin: 10px 0;
`;

export const SubmitBtn = styled(CommonButton)`
    margin-top: 10px;
`;

export const Heading = styled(CommonH2)``;

export const AuthLink = styled(CommonText)`
    color: ${({ theme }) => theme.colors.active};
    cursor: pointer;
`;

export const Error = styled(CommonText)`
    color: ${({ theme }) => theme.colors.error};
`;
