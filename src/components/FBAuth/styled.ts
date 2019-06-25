import styled from 'styled-components';

import CommonText from '@common/Text';

export const Button = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    border: 1px solid #d4d4d4;
    border-radius: 25px;
    padding: 5px;
    :hover {
        background-color: #d4d4d4;
    }
    :disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }
    > * {
        padding-right: 15px;
    }
`;

export const Text = CommonText;
