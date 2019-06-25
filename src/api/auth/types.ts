export interface LoginPayload {
    email: string;
    password: string;
}

export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
}

export interface FBAuthPayload {
    access_token: string;
}

export interface UpdateCustomerPayload {
    name: string;
    email: string;
    password?: string;
    day_phone: string;
    eve_phone?: string;
    mob_phone?: string;
}

export interface UpdateAdressPayload {
    address_1: string;
    address_2?: string;
    city: string;
    region: string;
    postal_code: string;
    country: string;
    shipping_region_id: number;
}

export interface UpdateCustomerCreditCard {
    credit_card: string;
}
