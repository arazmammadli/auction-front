
import { useMutation } from '@tanstack/react-query';
import { authRequest } from '../data/auth.request';
import { useAuthStore } from '../data/auth.store';

export function useRegister() {

    const authState = useAuthStore((state) => ({
        setPhoneForOtp: state.setPhoneForOtp,
        setTimeout: state.setTimeOut,
    }));


    const query = useMutation({
        mutationKey: ['register'],
        mutationFn: authRequest.register,
        onSuccess: (data) => {
            authState.setPhoneForOtp(data.phoneNumber);
            authState.setTimeout(60);
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