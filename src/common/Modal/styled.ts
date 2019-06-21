import styled from 'styled-components';

import CommonImage from '@common/Image';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    z-index: ${({ theme }) => theme.layer.modal};
`;

export const ContentWrapper = styled.div`
    min-width: 300px;
`;

export const CloseWrapper = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const CloseIcon = styled(CommonImage)``;

export const Content = styled.div`
    display: flex;
    position: relative;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    overflow: hidden;
    width: 100%;
    min-height: 300px;
    padding: 40px 20px;
    > * {
        z-index: ${({ theme }) => theme.layer.justOver};
    }
`;

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.8);
`;
