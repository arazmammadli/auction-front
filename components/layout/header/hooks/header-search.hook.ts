import { useQuery } from "@tanstack/react-query";
import { searchRequest } from "../data/header-search.request";

export function useAuctionSearch(searchTxt: string) {

    const query = useQuery(
        ["getSearchAuction"],
        () => searchRequest.searchAuction({ search: searchTxt }),
        {
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            enabled:false
        }
    );

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data!,
        refetch: query.refetch,
        isFetching: query.isFetching,
        query,
    };
};