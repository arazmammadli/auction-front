import { useMutation } from "@tanstack/react-query";
import { authRequest } from "../data/auth.request";

export function useConfirmResetPassword() {

    const query = useMutation({
        mutationKey: ["confirmReseTPassword"],
        mutationFn: authRequest.confirmResetPassword
    });

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync,
    };
};