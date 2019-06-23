import BaseApi from '@api/index';

import { FBAuthPayload, LoginPayload, RegisterPayload } from './types';

class AuthApi extends BaseApi {
    static getCustomer(accessToken: string) {
        return this.request<ICustomer, IAuthError>({
            headers: { 'user-key': accessToken },
            method: 'get',
            url: '/customer',
        });
    }

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
