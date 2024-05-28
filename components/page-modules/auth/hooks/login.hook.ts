
import { useMutation } from '@tanstack/react-query';
import { authRequest } from '../data/auth.request';
import { useAuthStore } from '../data/auth.store';

export function useLogin() {

    const authState = useAuthStore((state) => ({
        setAuth: state.setAuth,
        setTimeout: state.setTimeOut,
        setPhoneForOtp: state.setPhoneForOtp
    }));


    const query = useMutation({
        mutationKey: ['login'],
        mutationFn: authRequest.login,
        onSuccess: (data, variables) => {

            if (data.statusCode) {
                authState.setTimeout(60);
                authState.setPhoneForOtp(Number(variables.username));
                window.location.replace('/verify-phone')
            }

            authState.setAuth({
                accessToken: data.token,
                isLogin: Boolean(data.token)
            })
        },

    })

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync,
    }

}