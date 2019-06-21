import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { PORTAL_ROOT } from '@config/global';

export default class extends Document {
    render() {
        return (
            <html>
                <Head />
                <body>
                    <Main />
                    {/* here we will mount our modal portal */}
                    <div id={PORTAL_ROOT} />
                    <NextScript />
                </body>
            </html>
        );
    }
}
