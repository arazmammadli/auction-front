
import { useMutation } from '@tanstack/react-query';
import { authRequest } from '../data/auth.request';
import { useAuthStore } from '../data/auth.store';

export function useOtpSend() {

    const authState = useAuthStore((state) => ({
        setTimeout: state.setTimeOut,
    }));


    const query = useMutation({
        mutationKey: ['otp-send'],
        mutationFn: authRequest.sendOtp,
        onSuccess: (data) => {
            authState.setTimeout(60);
            window.location.reload() // FIXME
        },
    })

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync
    }

}