"use client";
import { PiArrowLeftBold, PiCheckCircle } from "react-icons/pi";
import { OutlinedButton } from "../common/outlined.button";
import { CustomLink } from "../common/link";
import { GoHome } from "react-icons/go";
import { useRouter } from "next/navigation";
import { Button } from "../common/button";

type Props = {
    head: string;
    content: string;
    back_btn_txt: string;
    home_btn_txt: string;
};

export function Success(props: Props) {
    const { content, head, back_btn_txt, home_btn_txt } = props;
    const router = useRouter();

    function goBack() {
        router.back();
    };

    return (
        <div className="w-full flex flex-col gap-8">
            <div className="w-full">
                <div className="mb-6 flex justify-center">
                    <PiCheckCircle size="88px" color="#2DB324" />
                </div>
                <div className="max-w-[26.5rem] mx-auto text-center">
                    <h1 className="text-2xl font-semibold leading-8 text-[#191c1f] mb-3">{head}</h1>
                    <p className="text-sm font-normal leading-5 text-[#5F6C72]">{content}</p>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-3">
                <Button onClick={goBack} width="w-fit">
                    <PiArrowLeftBold color="#fff" size="20px" />
                    <span className="text-sm font-bold leading-[48px] uppercase text-white">{back_btn_txt}</span>
                </Button>
                <OutlinedButton type="link" href="/" borderClr="border-[#FFE7D6]">
                    <GoHome color="#FA8232" size="20px" />
                    <span className="text-sm font-bold leading-[48px] text-[#FA8232] uppercase">{home_btn_txt}</span>
                </OutlinedButton>
            </div>
        </div>
    )
}