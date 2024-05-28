import { requestInstanceClient } from "@/config/request"
import { IOrderPay, IOrdersResponse } from "./orders.type";


export const ordersRequest = {

    getOrders: async (
        {
            limit = 10,
            pageParam = 0
        }: {
            limit?: number,
            pageParam?: number
        }
    ) => {

        const data = await requestInstanceClient.get<IOrdersResponse>(`/Orders?Limit=${limit}&offset=${pageParam}`);
        return {
            ...data,
            prevOffset: pageParam
        }
    },

    payOrder: (data: IOrderPay) => {
        return requestInstanceClient.post<{ redirectUrl: string }, IOrderPay>(`/Orders/PayByOrder`, data);
    },

    getOrder: (id: string) => {
        return requestInstanceClient.get<any>(`/Orders/Get?id=${id}`);
    }
}