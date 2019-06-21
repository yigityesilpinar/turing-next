import styled from 'styled-components';

import CommonButton from '@common/Button';

export const Button = styled(CommonButton)`
    background-color: #1b4293;
    color: white;
    :disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }
`;
