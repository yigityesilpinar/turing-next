import styled, { css } from 'styled-components';

import CommonLink from '@common/Link';

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const Link = styled(CommonLink)<IWithActiveProp>`
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.topBar};
    &,
    :active,
    :visited {
        color: ${props => props.theme.colors.heading};
        :before {
            background: ${props => props.theme.colors.heading};
        }
    }
    ${({ active, theme }) =>
        active &&
        css`
            &,
            :active,
            :visited {
                color: ${theme.colors.active};
                :before {
                    background: ${theme.colors.active};
                }
            }
        `}
`;
