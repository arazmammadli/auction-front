import { useInfiniteQuery } from "@tanstack/react-query";
import { auctionArchiveRequest } from "../data/auction-archive.request";

export function useGetAuctionArchive() {

    const query = useInfiniteQuery(
        ["getAuctionsArchive"],
        auctionArchiveRequest.getAuctionArchive,
        {
            getNextPageParam: (lastPage) => {
                if (lastPage.prevOffset + 6 >= lastPage.count) {
                    return false;
                };
                return lastPage.prevOffset + 6
            }
        }
    );

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        fetchNextPage: query.fetchNextPage,
        refetch: query.refetch,
        hasNextPage: query.hasNextPage,
        isFetchingNextPage: query.isFetchingNextPage,
        query
    };
}