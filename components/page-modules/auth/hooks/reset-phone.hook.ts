import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../data/auth.store";
import { authRequest } from "../data/auth.request";
import { cookiePersistStorage } from "@/shared/cookie";

export function useResetPasswordWithPhone() {
    const { setItem } = cookiePersistStorage;

    const query = useMutation({
        mutationKey: ["forgetPassword"],
        mutationFn: authRequest.resetPasswordWithPhone,
        onSuccess: () => {
            setItem("resetWithPhone", JSON.stringify(120));
        }
    });

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync
    };
};