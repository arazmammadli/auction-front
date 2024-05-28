import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notificationRequest } from "../data/notification.request";

export function useReadNotification() {
    const queryClient = useQueryClient();

    const query = useMutation(
        {
            mutationKey: ["readNotifications"],
            mutationFn: notificationRequest.readNotification,
            onSuccess: () => {
                queryClient.invalidateQueries(["getNotifications"]);
                queryClient.invalidateQueries(["getAllNotifications"]);
            }
        }
    );

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync,
    };
};