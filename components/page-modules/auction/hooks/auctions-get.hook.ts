import { useQuery } from '@tanstack/react-query';
import { auctionRequest } from '../data/auction.request';

export function useGetAuctions() {
  const query = useQuery(['getAuctions'], () => auctionRequest.getAuctions({limit: 20, offset: 0}), {
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });


  return {
    isLoading: query.isLoading,
    isError: query.isError,
    isSuccess: query.isSuccess,
    data: query.data!,
    refetch:query.refetch,
    query,
  };
};
