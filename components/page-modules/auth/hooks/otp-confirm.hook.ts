
import { useMutation } from '@tanstack/react-query';
import { authRequest } from '../data/auth.request';
import { useAuthStore } from '../data/auth.store';

export function useOtpConfirm() {

    const authState = useAuthStore((state) => ({
        setTimeout: state.setTimeOut,
        setPhoneForOtp: state.setPhoneForOtp
    }));


    const query = useMutation({
        mutationKey: ['otp-confirm'],
        mutationFn: authRequest.otpConfirm,
        onSuccess: () => {
            authState.setTimeout(0)
            authState.setPhoneForOtp(null);
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