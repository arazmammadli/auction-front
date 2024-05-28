import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { ordersRequest } from "../data/orders.request";

export function useGetOrdersArchive() {

    const query = useInfiniteQuery({
        queryKey: ["orders"],
        queryFn: ordersRequest.getOrders,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevOffset + 10 >= lastPage.count) {
                return false;
            };

            return lastPage.prevOffset + 10;
        }
    });

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        nextPage: query.fetchNextPage,
        hasNextPage: query.hasNextPage,
        query
    };
    
};