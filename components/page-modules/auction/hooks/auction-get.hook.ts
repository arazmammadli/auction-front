import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { auctionRequest } from '../data/auction.request';
import { useAuctionStore } from '../data/auction.store';
import { useAuthStore } from '../../auth/data/auth.store';

export function useGetAuction() {

  // auction state
  const auctionState = useAuctionStore((state) => ({
    setParticipants: state.setParticipants,
    setIsConnectedCurrentUser: state.setIsConnectedCurrentUser,
    setProductInfo: state.setProductInfo,
  }));

  // auth state
  const authState = useAuthStore((state) => ({
    accessToken: state.auth.accessToken
  }));

  // hooks
  const params = useParams();

  const query = useQuery(['getAuction'], () => auctionRequest.getAuction(params.slug as string, authState.accessToken), {
    retry: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (query.isSuccess) {
      auctionState.setParticipants(query.data.participants);
      auctionState.setIsConnectedCurrentUser(query.data.isConnectedCurrentUser);
      auctionState.setProductInfo(query.data.product.info);
    }
  }, [query.isSuccess, query.isRefetching])

  return {
    isLoading: query.isLoading,
    isError: query.isError,
    isSuccess: query.isSuccess,
    data: query.data!,
    refetch: query.refetch,
    query,
  };
}
