import { TextareaHTMLAttributes } from 'react';

export interface IInput extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    hasError?: boolean;
}
