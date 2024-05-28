import { useInfiniteQuery } from "@tanstack/react-query";
import { userArchiveRequest } from "../data/user-archive.request";
import { useAuthStore } from "@/components/page-modules/auth/data/auth.store";

export function useGetUserArchive() {

    const authState = useAuthStore((state) => ({
        userId: state.user.id
    }));

    const query = useInfiniteQuery(
        ["getUserAuctionArchive"],
        () => userArchiveRequest.getUserArchive({ userId: authState.userId }),
        {
            getNextPageParam: (lastPage) => {
                if (lastPage.prevOffset + 10 >= lastPage.count) {
                    return false;
                }

                return lastPage.prevOffset + 10;
            }
        }
    );

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        fetchNextPage: query.fetchNextPage,
        hasNextPage: query.hasNextPage,
        query
    };
};