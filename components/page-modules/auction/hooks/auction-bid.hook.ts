import { useMutation } from '@tanstack/react-query';
import { auctionRequest } from '../data/auction.request';
import { useAuthStore } from '../../auth/data/auth.store';
import { useAuctionStore } from '../data/auction.store';

export function useAuctionBid() {
  // state
  const authState = useAuthStore((state) => ({
    user: state.user,
    auth: state.auth,
  }));

  const auctionState = useAuctionStore((state) => ({
    onChangeBid: state.onChangeBid,
  }));

  const query = useMutation({
    mutationKey: ['auctionBid'],
    mutationFn: auctionRequest.bidAuction,
    onSuccess: (data, variables) => {
      if (data?.success && authState.auth.isLogin) {
        auctionState.onChangeBid(String(variables.offeredPrice));
      }
    },
    onError: () => {},
  });

  return {
    isLoading: query.isLoading,
    isError: query.isError,
    isSuccess: query.isSuccess,
    data: query.data,
    mutateAsync: query.mutateAsync,
  };
}
