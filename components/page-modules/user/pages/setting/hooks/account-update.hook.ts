import { useMutation } from "@tanstack/react-query"
import { settingRequest } from "../data/setting.request"
import { useAuthStore } from "@/components/page-modules/auth/data/auth.store"

export function useAccountUpdate() {
    const authState = useAuthStore((state) => ({
        setUser: state.setUser
    }))

    const query = useMutation({
        mutationKey: ["accountUpdate"],
        mutationFn: settingRequest.accountUpdate,
        onSuccess: (data) => {
            if (data) {
                authState.setUser(data)
            }
        }
    })

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync,
    }
}