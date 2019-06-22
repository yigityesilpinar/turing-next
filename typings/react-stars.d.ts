declare module 'react-stars' {
    import * as React from 'react';
    interface IReactStars {
        className?: string;
        count?: number; //	How many total stars you want	5	number
        value: number; //	Set rating value	0	number
        char?: string; //	Which character you want to use as a star	★	string
        color1?: string; //	Color of inactive star (this supports any CSS valid value)	gray	string
        color2?: string; //	Color of selected or active star	#ffd700	string
        size?: number; //	Size of stars (in px)	15px
        edit?: boolean; //	Should you be able to select rating or just see rating (for reusability)	true	boolean
        half?: boolean; //	Should component use half stars, if not the decimal part will be dropped otherwise normal algebra rools will apply to round to half stars	true	boolean
        onChange?(new_rating: number): void;
    }
    declare class ReactStars extends React.Component<IReactStars> {}
    export default ReactStars;
}
