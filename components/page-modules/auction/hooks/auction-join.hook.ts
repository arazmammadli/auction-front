import { useMutation } from '@tanstack/react-query';
import { auctionRequest } from '../data/auction.request';
import { AuctionPay } from '../data/auction.type';

export function useAuctionJoin() {

  const query = useMutation({
    mutationKey: ['auctionJoin'],
    mutationFn: auctionRequest.joinAuction,
    onSuccess: (data, variables) => {
      if (data) {
        if (variables.payType === AuctionPay.OneTime && data.link) {
          return window.location.replace(data.link);
        }

        if(variables.payType === AuctionPay.SavedCard) {
            window.location.replace(`${window.location.pathname}?result=success`);
        }

      }
    },
  });

  return {
    isLoading: query.isLoading,
    isError: query.isError,
    isSuccess: query.isSuccess,
    data: query.data,
    mutateAsync: query.mutateAsync,
  };
}
