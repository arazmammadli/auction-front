import { requestInstanceClient } from '@/config/request';
import { IAuth, IAuthResponse, IConfirmPhone, IConfirmResetPassword, IRegister, IRegisterResponse, IResetPasswordResponse, IUser } from './auth.type';


export const authRequest = {
    register: (data: IRegister) => {
        return requestInstanceClient.post<IRegisterResponse, IRegister>("/user", data)
    },

    login: (data: IAuth) => {
        return requestInstanceClient.post<IAuthResponse, IAuth>("/user/login", data)
    },

    getUser: () => {
        return requestInstanceClient.get<IUser>("/user")
    },

    sendOtp: (data: { phone: number }) => {
        return requestInstanceClient.post<{ statusCode: number }, { phone: number }>("/user/sendconfirmotp", data)
    },
    otpConfirm: (data: IConfirmPhone) => {
        return requestInstanceClient.post<unknown, IConfirmPhone>("/user/confirmphonenumber", data)
    },

    resetPasswordWithPhone: (data: { phoneNumber: string }) => {
        return requestInstanceClient.post<IResetPasswordResponse, { phoneNumber: string }>("/User/SendResetPassword", data);
    },

    resetPasswordWithEmail: (data: { email: string }) => {
        return requestInstanceClient.post<IResetPasswordResponse, { email: string }>("/User/SendResetPasswordEmail", data);
    },

    confirmResetPassword: (data:IConfirmResetPassword) => {
        return requestInstanceClient.post<IResetPasswordResponse, IConfirmResetPassword>("/api/User/ConfirmResetPassword",data);
    }

}