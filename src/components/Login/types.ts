export interface ILogin {
    switchAuthMethod(): void;
    onLoginSuccess(): void;
}

export interface IState {
    password: string;
    email: string;
}

export interface IInputConfig {
    type?: 'email' | 'password';
    name: keyof IState;
    required: boolean;
}
