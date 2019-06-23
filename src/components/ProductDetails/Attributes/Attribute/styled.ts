import styled from 'styled-components';
import CommonH3 from '@common/H3';
import Colors from '@theme/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SelectContainer = styled.div`
    display: flex;
`;

export const Name = styled(CommonH3)``;

const useThemeColor = (color: string) =>
    Colors.hasOwnProperty(color.toLowerCase()) ? (Colors as any)[color.toLowerCase()] : color;

const dot = (color = Colors.lightGray) => ({
    alignItems: 'center',
    display: 'flex',

    ':before': {
        backgroundColor: useThemeColor(color),
        borderRadius: 16,
        content: '" "',
        display: 'block',
        border: color.toLowerCase() === 'white' ? `1px solid ${Colors.lightGray}` : 'none',
        marginRight: 8,
        height: 16,
        width: 16,
    },
});

export const getCustomSelectStyles = (colorsEnabled?: boolean) => {
    const common = {
        // @ts-ignore
        control: styles => ({ ...styles, width: 200, display: 'flex', border: '1px solid', padding: '5px' }),
    };
    if (!colorsEnabled) {
        return common;
    }
    return {
        ...common,
        // @ts-ignore
        option: (styles, { data, isFocused }) => ({
            ...styles,
            backgroundColor: isFocused ? useThemeColor(data.label) : null,
        }),
        // @ts-ignore
        singleValue: (styles, { data }) => ({ ...styles, ...dot(data.label), padding: '10px' }),
    };
};
