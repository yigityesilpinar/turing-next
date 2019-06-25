import axios, { AxiosRequestConfig } from 'axios';

class BaseApi {
    static async request<TResponse, TError>({
        baseURL = process.env.API_BASE_URL,
        ...rest
    }: AxiosRequestConfig): Promise<[TResponse?, TError?]> {
        let error;
        let response;
        try {
            const axiosResponse = await axios.request<TResponse>({
                baseURL,
                ...rest,
                timeout: 6000,
            });
            response = axiosResponse.data;
            if (typeof response !== 'object') {
                response = undefined;
            }
        } catch (e) {
            try {
                error = e.response.data.error;
            } catch (unknownErr) {
                error = {
                    code: 'unknown',
                    field: 'unknown',
                    message: 'Oops sorry something went wrong, please try again later',
                };
            }
        }
        return [response, error];
    }
}

export default BaseApi;
