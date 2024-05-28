import { requestInstanceClient } from "@/config/request"

export const emailConfirmRequest = {
    confirmEmail: (data: { token: string }) => {
        return requestInstanceClient.post<unknown, { token: string }>("/User/ConfirmEmail", data);
    }
};