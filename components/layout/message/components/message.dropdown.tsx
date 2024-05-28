"use client";
import { Dropdown } from "antd";
import { BsFillChatDotsFill } from "react-icons/bs";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import {PiTelegramLogo} from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io5";

type Props = {
    head: string;
    desc: string;
}

export function MessageDropdown(props: Props) {
    const { head, desc } = props;
    return (
        <Dropdown overlayClassName="min-w-[275px_!important]" trigger={["click"]} dropdownRender={() => (
            <div className="w-full bg-white">
                <div className="text-center bg-[linear-gradient(95deg,rgb(0,85,201)_20%,rgb(24,185,212)_80%)] py-3 px-4">
                    <h1 className="text-base font-medium text-white">{head}</h1>
                    <p className="text-sm font-normal leading-5 text-[#f4f4f4]">{desc}</p>
                </div>
                <div className="flex flex-col overflow-y-auto">
                    <div className="block border-b border-solid border-[#E4E7E9] p-3">
                        <Link href="https://wa.me/994997101234" className="flex flex-row gap-2 items-center">
                            <FaWhatsapp size="24px" color="#2ab674" />
                            <p className="text-sm font-semibold text-[#191c1f]">Whatsapp</p>
                        </Link>
                    </div>
                    <div className="block border-b border-solid border-[#E4E7E9] p-3">
                        <Link href="https://t.me/mybidecom" className="flex flex-row gap-2 items-center">
                            <PiTelegramLogo size="24px" color="#0072b1" />
                            <p className="text-sm font-semibold text-[#191c1f]">Telegram</p>
                        </Link>
                    </div>
                </div>
            </div>
        )} placement="topRight">
            <div className="block cursor-pointer">
                <div className="w-[65px] h-[65px] bg-[linear-gradient(95deg,rgb(0,85,201)_20%,rgb(24,185,212)_80%)] rounded-full flex items-center justify-center">
                    <button type="button">
                        <IoLogoWhatsapp size="35px" color="#fff" />
                    </button>
                </div>
            </div>
        </Dropdown>
    )
}