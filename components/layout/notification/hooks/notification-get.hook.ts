import { useInfiniteQuery } from "@tanstack/react-query";
import { notificationRequest } from "../data/notification.request";
import { useAuthStore } from "@/components/page-modules/auth/data/auth.store";

export function useGetNotifications() {
    const authState = useAuthStore((state) => ({
        accessToken: state.auth.accessToken
    }));

    const query = useInfiniteQuery(
        ["getNotifications"],
        notificationRequest.getNotifications,
        {
            getNextPageParam: (lastPage) => {
                if (lastPage.prevOffset + 4 >= lastPage.count) {
                    return false;
                }
                return lastPage.prevOffset + 4
            },
            enabled: Boolean(authState.accessToken),
            refetchOnWindowFocus: false
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
};