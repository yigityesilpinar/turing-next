import styled from 'styled-components';

export const Anchor = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.link};
    & :active,
    & :visited {
        color: ${props => props.theme.colors.link};
    }
    position: relative;
    ::before {
        content: '';
        width: 0;
        height: 2px;
        position: absolute;
        bottom: -4px;
        left: 0;
        background: ${props => props.theme.colors.link};
        -webkit-transition: all 0.25s ease;
        -moz-transition: all 0.25s ease;
        transition: all 0.25s ease;
    }
    :hover {
        :before {
            width: 100%;
        }
    }
`;
