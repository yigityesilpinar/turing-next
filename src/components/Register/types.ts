export interface IRegister {
    switchAuthMethod(): void;
    onRegisterSuccess(): void;
}

export interface IState {
    name: string;
    password: string;
    email: string;
}

export interface IInputConfig {
    type?: 'email' | 'password';
    name: keyof IState;
    required: boolean;
}
