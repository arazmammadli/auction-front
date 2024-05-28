import { useMutation } from "@tanstack/react-query";
import { authRequest } from "../data/auth.request";

export function useResetPasswordWithEmail() {

    const query = useMutation({
        mutationKey: ["resetEmail"],
        mutationFn: authRequest.resetPasswordWithEmail,
    });

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync
    };
    
};