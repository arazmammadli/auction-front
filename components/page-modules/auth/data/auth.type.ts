export interface IRegister {
    email: string;
    password: string;
    confirmPassword: string;
    displayName: string;
    phoneNumber: string,
}


export interface IRegisterResponse {
    id: string;
    displayName: string;
    email: string;
    emailConfirmed: boolean;
    phoneNumber: number;
    phoneNumberConfirmed: boolean;
    orderCount: number,
    notificationCount: number
}

export interface IConfirmPhone {
    phone: number;
    code: string;
}

export interface ISendConfirm {
    phone: string;
}

export interface IAuthResponse {
    token: string,
    status: boolean,
    statusCode: number;
}

export interface IAuth {
    username: string;
    password: string;
    providerId: string;
}

export interface IUser {
    userName: string,
    displayName: string,
    email: string,
    emailConfirmed: boolean,
    phoneNumber: string,
    phoneNumberConfirmed: boolean,
    orderCount: number,
    notificationCount: number
};

export interface IResetPasswordResponse {
    success: string;
    statusCode: number;
    msg: string;
};

export interface IConfirmResetPassword {
    password: string;
    confirmPassword: string;
    token: string;
};

export type ConfirmResetFormType = Omit<IConfirmResetPassword, "token">;