const useFacebookLogin = (onSuccess: (token: string) => void) => () => {
    // @ts-ignore
    window.FB.getLoginStatus(response => {
        if (response.status !== 'connected') {
            // @ts-ignore
            window.FB.login(loginResponse => {
                if (loginResponse.authResponse) {
                    onSuccess(loginResponse.authResponse.accessToken);
                }
            }, {});
        } else {
            onSuccess(response.authResponse.accessToken);
        }
    });
};

export default useFacebookLogin;
