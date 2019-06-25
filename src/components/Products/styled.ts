import styled from 'styled-components';
import { BREAKPOINTS } from '@config/media';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    cursor: pointer;
`;

export const NoResult = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.h2};
`;

export const PaginationContainer = styled.div`
    display: flex;
    flex-basis: 100%;
    padding-top: 10px;
    > *,
    *:focus {
        outline: none;
    }
    > ul {
        display: flex;
        > li {
            a {
                padding: 4px 8px;
                cursor: pointer;
            }
        }
        > li.selected {
            a {
                background-color: ${({ theme }) => theme.colors.active};
                border-radius: 2px;
                color: ${({ theme }) => theme.colors.white};
            }
        }
        > li.disabled {
            a {
                opacity: 0.8;
                cursor: not-allowed;
            }
        }
    }
`;

export const ListContainer = styled.div`
    padding: 20px 0;
    display: flex;
    flex-basis: 100%;
    flex-wrap: wrap;
    > * {
        flex-basis: 30%;
    }
    @media (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
        justify-content: center;
        > * {
            flex-basis: 60%;
        }
    }
`;
