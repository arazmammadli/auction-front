"use client";
import { Input } from "@/components/common/input";
import { Button } from "@/components/common/button";
import { FormEvent, useEffect, useRef } from "react";
import { FormEntries } from "@/utils/mixed.utils";
import { IChangePassword } from "../data/setting.type";
import { useNotify } from "@/global/hooks/notify.hook";
import { useChangePassword } from "../hooks/change-password.hook";
import { changePasswordValidator } from "../validators/change-password.validator";

type Props = {
    change_password_head: string;
    current_password: string;
    new_password: string;
    new_password_placheholder: string;
    confirm_password: string;
    btn_text: string;
};

export function ChangePasswordContainer(props: Props) {
    const { btn_text, change_password_head, confirm_password, current_password, new_password, new_password_placheholder } = props;
    const pushNotify = useNotify();
    const changePasswordRequest = useChangePassword();
    const formRef = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        let timer: NodeJS.Timer;

        if (changePasswordRequest.isSuccess) {
            timer = setTimeout(() => {
                if (formRef.current) {
                    formRef.current.reset();
                }
            }, 2000);
        };

        return () => clearTimeout(timer);
    }, [changePasswordRequest.isSuccess]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const form = FormEntries<IChangePassword>(e.target);
        changePasswordValidator({
            form,
            notify: pushNotify.notify,
            cb: () => {
                pushNotify.promiseNotify(changePasswordRequest.mutateAsync(form), {
                    error: (data) => data.response.data.msg,
                    loadingText: "Changed...",
                    successText: "Successfully!"
                })
            }
        });
    };

    return (
        <div className="rounded border border-solid border-[#E4E7E9]">
            <div className="py-4 px-3 md:px-6 border-b border-solid border-[#E4E7E9]">
                <h1 className="text-sm font-medium leading-5 text-[#191c1f] uppercase">{change_password_head}</h1>
            </div>
            <div className="w-full p-3 md:p-6">
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <div className="w-full">
                            <Input type="password" id="oldPassword" name="oldPassword" label={current_password} />
                        </div>
                        <div className="w-full">
                            <Input type="password" id="password" name="password" placeholder={new_password_placheholder} label={new_password} />
                        </div>
                        <div className="w-full">
                            <Input type="password" id="confirmPassword" name="confirmPassword" label={confirm_password} />
                        </div>
                    </div>
                    <div className="w-full">
                        <Button type="submit" width="w-fit">
                            <span className="text-sm font-bold leading-[48px] text-white uppercase">{btn_text}</span>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}