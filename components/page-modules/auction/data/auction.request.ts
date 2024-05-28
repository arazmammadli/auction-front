import { requestInstanceClient, requestInstanceServer } from '@/config/request';
import { IAuction, IAuctionBid, IAuctionJoin, IAuctionResponse } from './auction.type';

export const auctionRequest = {
  // fixme pagiantion
  getAuctions: ({ limit = 30, offset = 0 }: { limit?: number; offset?: 0 }, accessToken?: string | null) => {
    return requestInstanceServer.get<IAuctionResponse>(`/Auction?Limit=${limit}&Offset=${offset}`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    });
  },

  getAuction: (slug: string, accessToken?: string | null) => {
    return requestInstanceServer.get<IAuction>(`/Auction/GetBySlug?Slug=${slug}`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    });
  },

  joinAuction: (data: IAuctionJoin) => {
    return requestInstanceClient.post<{ link: string; succeeded: boolean }, IAuctionJoin>(
      '/AuctionParticipant',
      data
    );
  },

  bidAuction: (data: IAuctionBid) => {
    return requestInstanceClient.patch<{ success: boolean; statusCode: number }, IAuctionBid>(
      '/AuctionParticipant/increaseOffer',
      data
    );
  },
};
