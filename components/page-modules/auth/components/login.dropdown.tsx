import { Dropdown } from "antd"
import { LoginContainer } from "@/components/page-modules/auth/containers/login.container";
import { PiUser } from "react-icons/pi";
import Link from "next/link";
import { useAuthStore } from "../data/auth.store";
import { useCallback } from "react";
import { ClientOnly } from "@/components/layout/client-only";
import { useParams } from "next/navigation";

export function LoginDropdown() {
    // hooks
    const authState = useAuthStore(state => ({
        isLogin: state.auth.isLogin
    }));
    const params = useParams();
    const lang= params.lang;

    function getUrl() {
        return authState.isLogin ? `/${lang}/user` : `/${lang}/sign-in`
    }

    const url = useCallback(getUrl, [authState.isLogin]);


    return (
        <Link href={url()} className="h-max">
            <PiUser size="32px" color="white" />
        </Link>
    )
};
