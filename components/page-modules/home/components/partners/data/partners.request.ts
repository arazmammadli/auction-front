import { requestInstanceClient } from "@/config/request"
import { IPartners } from "./partners.type"

export const partnersRequest = {

    getPartners: () => {
        return requestInstanceClient.get<IPartners[]>("/Partners");
    }
    
}