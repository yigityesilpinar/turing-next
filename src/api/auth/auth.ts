import BaseApi from '@api/index';

import { FBAuthPayload, LoginPayload, RegisterPayload, UpdateAdressPayload, UpdateCustomerCreditCard } from './types';

class AuthApi extends BaseApi {
    static getCustomer(accessToken: string) {
        return this.request<ICustomer, IErrorResponse>({
            headers: { 'user-key': accessToken },
            method: 'get',
            url: '/customer',
        });
    }

    static fbAuth(payload: FBAuthPayload) {
        return this.request<IAuthResponse, IErrorResponse>({
            data: payload,
            method: 'post',
            url: '/customers/facebook',
        });
    }

    static login(payload: LoginPayload) {
        return this.request<IAuthResponse, IErrorResponse>({
            data: payload,
            method: 'post',
            url: '/customers/login',
        });
    }
    static register(payload: RegisterPayload) {
        return this.request<IAuthResponse, IErrorResponse>({
            data: payload,
            method: 'post',
            url: '/customers',
        });
    }

    static updateAddress(payload: UpdateAdressPayload, accessToken: string) {
        return this.request<ICustomer, IErrorResponse>({
            headers: { 'user-key': accessToken },
            data: payload,
            method: 'put',
            url: '/customers/address',
        });
    }

    static updateCreditCard(payload: UpdateCustomerCreditCard, accessToken: string) {
        return this.request<ICustomer, IErrorResponse>({
            headers: { 'user-key': accessToken },
            data: payload,
            method: 'put',
            url: '/customers/creditCard',
        });
    }
}

export default AuthApi;
