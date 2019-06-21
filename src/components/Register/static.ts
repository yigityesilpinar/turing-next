import { IInputConfig } from './types';

export const INPUT_CONFIG: Array<IInputConfig> = [
    {
        name: 'name',
        required: true,
    },
    {
        name: 'email',
        type: 'email',
        required: true,
    },
    {
        name: 'password',
        type: 'password',
        required: true,
    },
];
