import axios from "axios";
import { BASE_URL } from "@/config/base";
import { cleanAfterLogout } from "@/utils/mixed.utils";
import { useAuthStore } from '@/components/page-modules/auth/data/auth.store';


export const instance = axios.create({
    baseURL: BASE_URL, headers: {
        'Content-Type': 'application/json',
    }
})


instance.interceptors.response.use(
    async (response) => response,
    async (error) => {
        if (error.response.status === 401) {
            // document.location.href = '/auth/login';
        }

        return Promise.reject(error)
    }
)

instance.interceptors.request.use(
    (config) => {
        // @ts-ignore
        config.headers = getHeaders();

        return config
    }
)

export function getHeaders() {

    const authState = useAuthStore.getState()
    const lang = 'az' // source must be from cookie


    const headers = Object.assign({},
        authState.auth.isLogin && authState.auth.accessToken ? { Authorization: `Bearer ${authState.auth.accessToken}` } : {},
        lang ? { 'X-LANG': lang } : {}
    )

    return headers
}
