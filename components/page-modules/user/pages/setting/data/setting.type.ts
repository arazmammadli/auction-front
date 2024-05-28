export interface ISetting {
    email: string;
    phoneNumber: string;
};

export interface IChangePassword {
    oldPassword: string;
    password: string;
    confirmPassword: string
};

export interface IChangePasswordResponse {
    msg: string;
    statusCode: number;
    success: boolean;
};