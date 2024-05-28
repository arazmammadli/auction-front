import { useMutation } from "@tanstack/react-query";
import { sidebarRequest } from "../data/sidebar.request";

export function useSendConfirmEmail() {

    const query = useMutation({
        mutationKey: ["confirmEmail"],
        mutationFn: sidebarRequest.sendConfirmEmail,
    });

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync,
    }
}