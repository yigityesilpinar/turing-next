import BaseApi from '@api/index';

import { FBAuthPayload, LoginPayload, RegisterPayload } from './types';

class AuthApi extends BaseApi {
    static fbAuth(payload: FBAuthPayload) {
        return this.request<IAuthResponse, IAuthError>({
            data: payload,
            method: 'post',
            url: '/customers/facebook',
        });
    }

    static login(payload: LoginPayload) {
        return this.request<IAuthResponse, IAuthError>({
            data: payload,
            method: 'post',
            url: '/customers/login',
        });
    }
    static register(payload: RegisterPayload) {
        return this.request<IAuthResponse, IAuthError>({
            data: payload,
            method: 'post',
            url: '/customers',
        });
    }
}

export default AuthApi;
