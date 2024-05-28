"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/common/input";
import { Button } from "@/components/common/button";
import { PiArrowRightBold } from "react-icons/pi";
import Link from "next/link";
import { Select } from "@/components/common/select";
import { cookiePersistStorage } from "@/shared/cookie";
import { Interval } from "@/components/common/interval";
import { FormEntries } from "@/utils/mixed.utils";
import { useNotify } from "@/global/hooks/notify.hook";
import { useRouter } from "next/navigation";
import { resetWithPhoneValidator } from "../validators/reset-phone.validator";
import { useResetPasswordWithPhone } from "../hooks/reset-phone.hook";
import { useResetPasswordWithEmail } from "../hooks/reset-email.hook";
import { resetWithEmailValidator } from "../validators/reset-email.validator";
import { Toast } from "@/components/common/toast";

export function ForgetPasswordContainer() {
    const resetPasswordPhoneRequest = useResetPasswordWithPhone();
    const resetPasswordEmailRequest = useResetPasswordWithEmail();
    const [selectedType, setSelectedType] = useState("email");
    const { getItem, removeItem, setItem } = cookiePersistStorage;
    const currentSeconds = getItem("resetWithPhone");
    const [seconds, setSeconds] = useState<number>(currentSeconds ? +currentSeconds : 0);
    const [active, setActive] = useState(!!currentSeconds);
    const forgotPasswordOpions = [
        { value: 'email', label: 'Email' },
        { value: 'phone', label: 'Telefon' },
    ];
    const pushNotify = useNotify();
    const router = useRouter();

    useEffect(() => {
        let timer: NodeJS.Timer;

        if (resetPasswordEmailRequest.isSuccess || resetPasswordPhoneRequest.isSuccess) {
            timer = setTimeout(
                () => {
                    router.push("/sign-in");
                },
                1500
            );
        };

        return () => clearTimeout(timer);
    }, [resetPasswordEmailRequest.isSuccess, resetPasswordPhoneRequest.isSuccess]);

    useEffect(() => {
        if (resetPasswordPhoneRequest.isError) {
            removeItem("resetWithPhone");
            setSeconds(120);
            setActive(false);
        }
    }, [resetPasswordPhoneRequest.isError])

    const setInterval = () => {
        setSeconds((prev) => {
            setItem("resetWithPhone", JSON.stringify(prev));
            return prev === 0 ? 0 : prev - 1;
        });
    };

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        if (value === "phone") {
            removeItem("resetWithPhone");
            setSeconds(120);
            setActive(false);
        };

        setSelectedType(value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        switch (selectedType) {
            case "phone":
                const phoneForm = FormEntries<{ phoneNumber: string }>(e.target);
                resetWithPhoneValidator({
                    form: phoneForm,
                    notify: pushNotify.notify,
                    cb: () => {
                        setActive(true);
                        pushNotify.promiseNotify(resetPasswordPhoneRequest.mutateAsync(phoneForm), {
                            error: (data) => data.response.data.msg,
                            loadingText: "Process started",
                            successText: "Successfully!"
                        })
                    }
                });

                return;
            case "email":
                const emailForm = FormEntries<{ email: string }>(e.target);

                resetWithEmailValidator({
                    form: emailForm,
                    notify: pushNotify.notify,
                    cb: () => {
                        pushNotify.promiseNotify(resetPasswordEmailRequest.mutateAsync(emailForm), {
                            error: (data) => data.response.data.msg,
                            loadingText: "Process started",
                            successText: "Successfully!"
                        })
                    }
                });

                return;
        };
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="w-full flex flex-col items-center gap-4">
                <div className="w-full text-center">
                    <h1 className="text-xl font-semibold leading-5 text-[#191c1f] mb-3">Forget Password</h1>
                    <p className="text-sm font-normal leading-5 text-[#5f6c72]">Enter the email address or mobile phone number associated with your Clicon account.</p>
                </div>
                {
                    selectedType === "phone" ? <div className="w-[50px] h-[50px] border-2 rounded-full border-green-600 flex justify-center items-center">
                        <Interval interval={1000} enabled={active} seconds={seconds} cb={setInterval} />
                    </div> : null
                }
            </div>
            <div className="w-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="w-full">
                        <Select onChange={onChange} options={forgotPasswordOpions} label="Forgot Types" />
                    </div>
                    {
                        selectedType === "email" ? <div className="w-full">
                            <Input label="Email Address" name="email" id="email" type="email" />
                        </div> : <div className="w-full">
                            <Input label="Phone" placeholder="99450XXXXXXX" name="phoneNumber" id="phoneNumber" type="text" />
                        </div>
                    }
                    <div className="w-full">
                        <Button width="w-full" type="submit">
                            <span className="text-sm text-white font-bold leading-[48px] uppercase">Send Code</span>
                            <PiArrowRightBold color="#fff" size="22px" />
                        </Button>
                    </div>
                </form>
            </div>
            <div className="w-full">
                <div className="flex items-baseline gap-[6px] mb-2">
                    <span className="text-sm font-normal leading-5 text-[#5f6c72]">Already have account?</span>
                    <Link href="/sign-in">Sign In</Link>
                </div>
                <div className="flex items-baseline gap-[6px]">
                    <span className="text-sm font-normal leading-5 text-[#5f6c72]">Don’t have account?</span>
                    <Link href="/sign-up">Sign Up</Link>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#E4E7E9]"></div>
            <Toast />
        </div>
    )
}