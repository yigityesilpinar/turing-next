import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { PORTAL_ROOT } from '@config/global';

export default class extends Document<{ styleTags?: string }> {
    static getInitialProps({ renderPage }: any) {
        const sheet = new ServerStyleSheet();
        //  Retrieve styles from components in the page
        // @ts-ignore
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

        // Extract the styles as <style> tags
        const styleTags = sheet.getStyleElement();

        //  Pass styleTags as a prop
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    {/* put the styles in the head  */}
                    {this.props.styleTags}
                    <script src="https://js.stripe.com/v3/" />
                </Head>
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
