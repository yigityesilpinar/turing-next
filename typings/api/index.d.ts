interface IApiError {
    error: {
        status: number;
        code: string; //'AUT_02'
        message: string;
        field: string; //'NoAuth'
    };
}
