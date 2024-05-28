
import { useMutation, useQuery } from '@tanstack/react-query';
import { authRequest } from '../data/auth.request';
import { useAuthStore } from '../data/auth.store';

export function useGetUser() {

    const authState = useAuthStore((state) => ({
        setUser: state.setUser,
    }));
  

    const query = useQuery(['getUser'], authRequest.getUser, {
        onSuccess: (data) => {
            authState.setUser(data)
        },
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        query
    }

}