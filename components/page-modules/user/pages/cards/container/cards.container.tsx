"use client";
import { PaymentOption } from '@/components/page-modules/user/shared/components/payment';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Toast } from "@/components/common/toast";
import { useNotify } from "@/global/hooks/notify.hook";

export function CardsContainer() {
    const searchParams = useSearchParams();
    const pushNotify = useNotify();
    const router = useRouter();

    useEffect(() => {
        if (searchParams.get("success") && searchParams.get("success") === "true") {
            pushNotify.notify("Cartınız uğurla əlavə olundu!", "success");
            setTimeout(() => {
                router.push("/user/cards");
            }, 1500)
        }
        if (searchParams.get("success") && searchParams.get("success") === "false") {
            pushNotify.notify("Cartınız əlavə olunmadı! Bir də sınayın", "error");
            setTimeout(() => {
                router.push("/user/cards");
            }, 1500)
        }
    }, [searchParams]);

    return (
        <>
            <div className="flex flex-col gap-6">
                <PaymentOption />
            </div>
            <Toast />
        </>
    )
};