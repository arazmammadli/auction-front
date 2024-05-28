import { cookiePersistStorage } from '@/shared/cookie';
import { create } from 'zustand'

import { createJSONStorage, persist } from 'zustand/middleware'
import { initialAuth } from './auth.repository';


export type AuthStoreTypes = {
    user: any,
    timeout: number;
    phoneForOtp: number | null;
    emailConfirmed: boolean;
    auth: {
        isLogin: boolean;
        accessToken: string | null;
    }
}


type AuthStoreActions = {
    setUser: (user: AuthStoreTypes['user']) => void;
    setTimeOut: (timeout: AuthStoreTypes['timeout']) => void;
    setPhoneForOtp: (phoneForOtp: AuthStoreTypes['phoneForOtp']) => void;
    setAuth: (auth: AuthStoreTypes['auth']) => void;
    setEmailComfirm: (emailConfirmed: AuthStoreTypes["emailConfirmed"]) => void;
    clean: () => void;
}



export const useAuthStore = create(

    persist<AuthStoreTypes & AuthStoreActions>(

        (set, get) => ({
            user: null,
            auth: initialAuth,
            phoneForOtp: null,
            timeout: 0,
            emailConfirmed: false,
            setUser: (user) => {
                set({ user })
            },
            setTimeOut: (timeout) => {
                set({ timeout })
            },
            setPhoneForOtp: (phoneForOtp) => {
                set({ phoneForOtp })
            },
            setAuth: (auth) => {
                set({ auth })
            },
            setEmailComfirm: (emailConfirmed) => {
                set({ emailConfirmed })
            },
            clean: () => {
                set({
                    user: null,
                    auth: initialAuth,
                    timeout: 0,
                    phoneForOtp: null
                })
            }

        }),

        {

            name: 'auth-storage',
            storage: createJSONStorage(() => cookiePersistStorage),

        }

    )

)