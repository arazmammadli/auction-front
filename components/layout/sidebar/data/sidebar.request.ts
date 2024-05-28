import { requestInstanceClient } from "@/config/request"

export const sidebarRequest = {

    sendConfirmEmail: (data: { token: string }) => {
        return requestInstanceClient.post<unknown, { token: string }>("/User/SendConfirmEmail", data);
    }

};