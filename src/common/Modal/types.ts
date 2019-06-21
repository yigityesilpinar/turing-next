import { ReactNode } from 'react';

export interface IModal {
    children: NonNullable<ReactNode>;
    onCloseClick: () => void;
    className?: string;
}
