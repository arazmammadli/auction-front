import { requestInstanceClient } from "@/config/request"
import { IActivateCardsResponse, ICardsResponse, IConfirmCardsRequest, IConfirmCardsResponse, ICard } from "./cards.type"

export const cardsRequst = {
    createCards: () => {
        return requestInstanceClient.post<ICardsResponse, any>("/UserCardInfo");
    },

    getCards: () => {
        return requestInstanceClient.get<ICard[]>("/UserCardInfo/GetAllByUserId")
    },
    getAvailableCard: (aggId: number) => {
        return requestInstanceClient.get<ICard>(`/UserCardInfo?AggregateId=${aggId}`)
    },
    confirmCards: (data: IConfirmCardsRequest) => {
        return requestInstanceClient.patch<IConfirmCardsResponse, IConfirmCardsRequest>("/UserCardInfo/Confirm", data)
    },

    cardsActivate: (token: string) => {
        return requestInstanceClient.patch<IActivateCardsResponse, never>(`/UserCardInfo/ActivateCard?Token=${token}`);
    },

    deleteCards: (token: string) => {
        return requestInstanceClient.delete(`/UserCardInfo/${token}`);
    }
}