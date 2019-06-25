import React from 'react';

export interface IContent {
    className?: string;
    children: React.ReactNode | Array<React.ReactNode>;
}
