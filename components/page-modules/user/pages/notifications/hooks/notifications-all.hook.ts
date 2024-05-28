import { useInfiniteQuery } from "@tanstack/react-query";
import { userNotificationsRequest } from "../data/user-notifications.request";

export function useGetAllNotifications() {
    
    const query = useInfiniteQuery(
        ["getAllNotifications"],
        userNotificationsRequest.getAllNotifications,
        {
            getNextPageParam: (lastPage) => {
                if (lastPage.prevOffset + 4 >= lastPage.count) {
                    return false;
                }
                return lastPage.prevOffset + 4
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