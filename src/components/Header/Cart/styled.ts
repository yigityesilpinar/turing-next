import styled from 'styled-components';

import CommonImage from '@common/Image';

export const Container = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 20px;
    position: relative;
    cursor: pointer;
`;

export const ItemCount = styled.span`
    position: absolute;
    top: -5px;
    left: -12px;
    background: ${({ theme }) => theme.colors.active};
    color: white;
    padding: 1px 4px;
    border-radius: 50%;
`;

export const CartIcon = styled(CommonImage)`
    width: 20px;
    height: 20px;
`;
