import { useMutation } from "@tanstack/react-query";
import { settingRequest } from "../data/setting.request";

export function useChangePassword() {

    const query = useMutation({
        mutationKey: ["changePassword"],
        mutationFn: settingRequest.changePassword,
    });


    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync,
    };

}