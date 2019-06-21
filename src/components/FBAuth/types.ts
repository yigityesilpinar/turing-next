export interface IFBAuth {
    buttonText: string;
    onSuccess(access_token: string): void;
}
