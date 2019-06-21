declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
    }
    interface Process {
        readonly browser: boolean;
    }
}

interface Window {
    fbAsyncInit: any;
    FB: any;
    onloadCallback: Function;
}

declare var window: Window;

declare module '*.bmp' {
    const src: string;
    export default src;
}

declare module '*.gif' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}
declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

    const src: string;
    export default src;
}

interface IWithActiveProp {
    active?: boolean;
}
