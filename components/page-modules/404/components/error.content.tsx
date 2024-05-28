"use client";
import Image from "next/image";
import { OutlinedButton } from "@/components/common/outlined.button";
import { PiArrowLeftBold } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { Button } from "@/components/common/button";
import { useRouter } from "next/navigation";

type Props = {
    head: string;
    content: string;
    back_btn_txt: string;
    home_btn_txt: string;
}

export function ErrorContent(props:Props) {
    const {back_btn_txt,content,head,home_btn_txt} = props;

    const router = useRouter();

    return (
        <div className="w-full flex items-center flex-col pb-5 md:pb-[7.75rem]">
            <div className="block">
                <Image src="/assets/images/404.png" width="500" height="500" alt="404 Error" />
            </div>
            <div className="w-full text-center">
                <h1 className="text-4xl font-semibold leading-[44px] text-[#191c1f] mb-6">{head}</h1>
                <p className="max-w-[33.5rem] mx-auto text-base font-normal text-[#475156] leading-6 mb-6">{content}</p>
                <div className="flex flex-row justify-center gap-4">
                    <Button onClick={() => router.back()} width="w-fit">
                        <PiArrowLeftBold color="#fff" size="22px" />
                        <span className="text-sm font-bold leading-[48px] uppercase text-white">{back_btn_txt}</span>
                    </Button>
                    <OutlinedButton type="link" href="/" borderClr="border-[#FFE7D6]">
                        <GoHome color="#FA8232" size="20px" />
                        <span className="text-sm font-bold leading-[48px] text-[#FA8232] uppercase">{home_btn_txt}</span>
                    </OutlinedButton>
                </div>
            </div>
        </div>
    )
}