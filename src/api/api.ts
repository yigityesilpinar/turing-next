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
            });
            response = axiosResponse.data;
            if (typeof response !== 'object') {
                // error = getGenericError<TError>();
                response = undefined;
            }
        } catch (e) {
            error = e.response.data.error;
        }
        return [response, error];
    }
}

export default BaseApi;
