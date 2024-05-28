import { IAuctionResponse } from "@/components/page-modules/auction/data/auction.type";
import { requestInstanceClient } from "@/config/request";

export const searchRequest = {
    searchAuction: (
        {
            limit = 5,
            offset = 0,
            search
        }: {
            limit?: number,
            offset?: number,
            search: string
        }
    ) => {
        if (!search) return { list: [], count: 0 };

        return requestInstanceClient.get<IAuctionResponse>(`/Auction?Limit=${limit}&Offset=${offset}&Name=${search}`);
    }
};