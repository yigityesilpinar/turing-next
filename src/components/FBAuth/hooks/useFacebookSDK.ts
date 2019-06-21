import { useEffect, useState } from 'react';

const scriptID = 'facebook-jssdk';
const scriptSRC = '//connect.facebook.net/en_En/sdk.js';

const useFacebookSDK = () => {
    const el = process.browser && window.document.getElementById(scriptID);
    const [loaded, setLoaded] = useState(!!el);

    useEffect(() => {
        if (!loaded) {
            const scriptTag = document.createElement('script');
            scriptTag.src = scriptSRC;
            scriptTag.id = scriptID;
            document.head.appendChild(scriptTag);
            window.fbAsyncInit = () => {
                window.FB.init({
                    appId: process.env.FB_APP_ID,
                    cookie: true,
                    status: true,
                    version: 'v3.2',
                    xfbml: true,
                });
                setLoaded(true);
            };
        } else {
            window.FB.XFBML.parse();
        }
    }, [loaded]);

    return loaded;
};

export default useFacebookSDK;
