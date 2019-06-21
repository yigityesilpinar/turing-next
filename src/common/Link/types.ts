import { HTMLAttributes } from 'react';

export interface ILink extends HTMLAttributes<HTMLAnchorElement> {
    text?: string;
    href: string;
}
