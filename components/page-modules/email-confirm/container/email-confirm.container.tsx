"use client";
import { Success } from "@/components/shared/success";
import { useNotify } from "@/global/hooks/notify.hook";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useConfirmEmail } from "../hooks/confirm-email.hook";

type Props = {
    head: string;
    content: string;
    back_btn_txt: string;
    home_btn_txt: string;
};

export function EmailConfirmContainer(props: Props) {
    const { back_btn_txt, content, head, home_btn_txt } = props;
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const emailConfirmRequest = useConfirmEmail();
    const pushNotify = useNotify();

    useEffect(() => {
        if (token && token !== "null") {
            pushNotify.promiseNotify(
                emailConfirmRequest.mutateAsync({ token: token }), {
                error: (data) => data.response.data.msg,
                loadingText: "The operation is in progress.",
                successText: "Successful!"
            }
            )
        }
    }, []);

    return (
        <Success
            head={head}
            content={content}
            back_btn_txt={back_btn_txt}
            home_btn_txt={home_btn_txt}
        />
    )
};