interface IErrorResponse {
    code: string;
    field: string; //"name, email, password"
    message: string; //'The field(s) are/is required.'
    status: number; //400
}

interface IAuthResponse {
    accessToken: string;
    customer: ICustomer;
    expires_in: string;
}
