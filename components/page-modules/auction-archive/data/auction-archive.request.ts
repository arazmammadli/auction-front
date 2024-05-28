import { requestInstanceServer } from "@/config/request"
import { IAuctionResponse } from "../../auction/data/auction.type";

export const auctionArchiveRequest = {

    getAuctionArchive: async (
        { limit = 6, pageParam = 0 }: Partial<{ limit: number, pageParam: number }>
    ) => {
        const data = await requestInstanceServer.get<IAuctionResponse>(`/Auction/Archive?Limit=${limit}&Offset=${pageParam}`);
        return {
            ...data,
            prevOffset: pageParam
        }
    },

};