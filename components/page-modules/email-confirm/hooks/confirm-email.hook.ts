import { useMutation } from "@tanstack/react-query";
import { emailConfirmRequest } from "../data/email-confirm.request";

export function useConfirmEmail() {

    const query = useMutation({
        mutationKey: ["emailConfirm"],
        mutationFn: emailConfirmRequest.confirmEmail,
    });

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync,
    };
};