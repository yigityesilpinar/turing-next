import styled from 'styled-components';

import TextInput from '@common/TextInput';
import CommonImage from '@common/Image';

export const Container = styled.div`
    display: flex;
    position: relative;
`;

export const SearchInput = styled(TextInput)`
    padding: 10px 30px;
    height: initial;
    border-radius: 25px;
`;

export const SearchIcon = styled(CommonImage)`
    width: 20px;
    height: 20px;
    position: absolute;
    left: 5px;
    top: 0;
    bottom: 0;
    margin: auto;
`;
