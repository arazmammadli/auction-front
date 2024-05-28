import { requestInstanceClient } from "@/config/request";
import { IChangePassword, IChangePasswordResponse, ISetting } from "./setting.type";

export const settingRequest = {

    accountUpdate: (data: ISetting) => {
        return requestInstanceClient.put<any, ISetting>("/User", data)
    },

    changePassword: (data: IChangePassword) => {
        return requestInstanceClient.post<IChangePasswordResponse, IChangePassword>("/User/ResetPasswordOld", data)
    }
}