import React from 'react';

import Portal from '@common/Portal';

import useLockBodyScroll from './hooks/useLockBodyScroll';
import { Backdrop, Content, ContentWrapper, CloseIcon, CloseWrapper, ModalWrapper } from './styled';
import { IModal } from './types';

const Modal: React.FC<IModal> = ({ className, children, onCloseClick }) => {
    useLockBodyScroll();

    return (
        <Portal>
            <ModalWrapper>
                <Backdrop onClick={onCloseClick} />
                <ContentWrapper className={className}>
                    <Content>
                        <CloseWrapper onClick={onCloseClick}>
                            <CloseIcon src="/static/images/close_icon.png" />
                        </CloseWrapper>
                        {children}
                    </Content>
                </ContentWrapper>
            </ModalWrapper>
        </Portal>
    );
};

export default Modal;
