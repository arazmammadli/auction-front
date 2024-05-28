"use client";
import { FormEvent, useEffect } from "react";
import { Input } from "@/components/common/input"
import { Button } from "@/components/common/button";
import { PiArrowRightBold } from "react-icons/pi";
import { useConfirmResetPassword } from "../hooks/confirm-reset.hook";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useNotify } from "@/global/hooks/notify.hook";
import { FormEntries } from "@/utils/mixed.utils";
import { ConfirmResetFormType, IConfirmResetPassword } from "../data/auth.type";
import { cookiePersistStorage } from "@/shared/cookie";
import { confirmResetPasswordValidator } from "../validators/confirm-reset.validator";
import { Toast } from "@/components/common/toast";
import { useAuthStore } from "../data/auth.store";
import { LangType } from "@/global/types/lang.type";

export function ResetPasswordContainer() {
    // hooks
    const authState = useAuthStore((state) => ({
        auth: state.auth
    }))
    const confirmResetPasswordRequest = useConfirmResetPassword();
    const router = useRouter();
    const pushNotify = useNotify();
    const { removeItem } = cookiePersistStorage;
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const params = useParams();
    const lang = params.lang as LangType;

    // navigate after successfully request
    useEffect(() => {
        if (authState.auth.accessToken) {
            router.push(`/${lang}/user`);
        }
    }, [authState]);

    useEffect(() => {
        if (!token) {
            router.push(`/${lang}`);
        };

        removeItem("resetWithPhone");
    }, [token]);

    useEffect(() => {
        let timer: NodeJS.Timer;

        if (confirmResetPasswordRequest.isSuccess) {
            timer = setTimeout(
                () => {
                    router.push(`/${lang}/sign-in`)
                },
                1500
            );
        };

        return () => clearTimeout(timer);
    }, [confirmResetPasswordRequest.isSuccess]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!token) return;

        const form = FormEntries<ConfirmResetFormType>(e.target);
        confirmResetPasswordValidator({
            form,
            notify: pushNotify.notify,
            cb: () => {
                pushNotify.promiseNotify(confirmResetPasswordRequest.mutateAsync({ ...form, token: token }), {
                    error: (data) => data.response.data.msg,
                    loadingText: "Your password is being reset...",
                    successText: "Your password has been reset"
                })
            }
        });
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="w-full text-center">
                <h1 className="text-xl font-semibold leading-5 text-[#191c1f] mb-3">Reset Password</h1>
                <p className="text-sm font-normal leading-5 text-[#5f6c72]">Duis sagittis molestie tellus, at eleifend sapien pellque quis. Fusce lorem nunc, fringilla sit amet nunc.</p>
            </div>
            <div className="w-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="w-full">
                        <Input label="Password" id="password" placeholder="6+ characters" name="password" type="password" />
                    </div>
                    <div className="w-full">
                        <Input label="Confirm Password" id="confirmPassword" name="confirmPassword" type="password" />
                    </div>
                    <div className="w-full">
                        <Button width="w-full" type="submit">
                            <span className="text-sm text-white font-bold leading-[48px] uppercase">Reset Password</span>
                            <PiArrowRightBold color="#fff" size="22px" />
                        </Button>
                    </div>
                </form>
            </div>
            <Toast />
        </div>
    )
};