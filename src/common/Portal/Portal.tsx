import { Component } from 'react';
import { createPortal } from 'react-dom';

import { PORTAL_ROOT } from '@config/global';

import { IPortal } from './types';

class Portal extends Component<IPortal, {}> {
    // @ts-ignore
    private el: HTMLDivElement;

    constructor(props: IPortal) {
        super(props);
        if (process.browser) {
            this.el = document.createElement('div');
        }
    }

    componentDidMount() {
        const portalRoot = document.getElementById(PORTAL_ROOT);
        if (portalRoot) {
            portalRoot.appendChild(this.el);
        }
    }

    componentWillUnmount() {
        try {
            const portalRoot = document.getElementById(PORTAL_ROOT);
            if (portalRoot) {
                portalRoot.removeChild(this.el);
            }
        } catch (e) {
            console.log('Portal component - ', e);
        }
    }

    render() {
        if (process.browser) {
            return createPortal(this.props.children, this.el);
        }
        return null;
    }
}

export default Portal;
