import { IAuctionResponse } from "@/components/page-modules/auction/data/auction.type";
import { requestInstanceClient } from "@/config/request";

export const userArchiveRequest = {
    getUserArchive: async (
        {
            limit = 10,
            pageParam = 0,
            userId
        }: Partial<{
            limit: number;
            pageParam: number;
            userId: string;
        }>
    ) => {
        const data = await requestInstanceClient.get<IAuctionResponse>(`/Auction/GetAllByUser?UserId=${userId}&Limit=${limit}&Offset=${pageParam}`);

        return {
            ...data,
            prevOffset: pageParam
        }
    }
};