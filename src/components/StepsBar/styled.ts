import styled, { css } from 'styled-components';

import CommonH3 from '@common/H3';

import { IDotProps, ILineProps } from './types';

export const Container = styled.span`
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
`;

export const Dot = styled.span<IDotProps>`
    border-radius: ${({ size }) => size}px;
    background-color: #eeeeee;
    content: '';
    display: block;
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
    ${({ active }) =>
        active &&
        css`
            background-color: ${({ theme }) => theme.colors.active};
        `};
`;

export const Line = styled.span<ILineProps>`
    background-color: #eeeeee;
    width: calc(${({ count }) => 100 / count}% - ${({ dotSize, isLast }) => (isLast ? dotSize * 2 : dotSize)}px);
    height: ${({ size }) => size}px;
    ${({ active }) =>
        active &&
        css`
            background-color: ${({ theme }) => theme.colors.active};
        `};
`;

export const LabelsContainer = styled.div`
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;
    margin-top: 20px;
`;

export const Label = CommonH3;
