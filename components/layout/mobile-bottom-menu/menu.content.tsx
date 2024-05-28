"use client";
import Link from "next/link";
import { PiUser } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { useCallback, useState } from "react";
import { MobileSearch } from "@/components/layout/mobile-search/index";
import { useAuthStore } from "@/components/page-modules/auth/data/auth.store";
import { LanguageSwitcher } from "../shared/lang.switcher";
import { MdLanguage } from "react-icons/md";

export default function MobileBottomMenuContent() {
    const [open, setOpen] = useState(false);
    const authState = useAuthStore((state) => ({
        isLogin: state.auth.isLogin
    }));

    function getUrl() {
        return authState.isLogin ? "/user" : "/sign-in";
    };

    const url = useCallback(getUrl, [authState.isLogin]);

    const closeSearch = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="fixed block lg:hidden w-full z-[9999999] bottom-0 left-0 py-[0.625rem] px-5 bg-white border border-solid border-[#dee0ea]">
                <div className="flex flex-wrap items-center flow justify-between">
                    <div className="flex-[1] px-[5px]">
                        <Link href="/" className="flex flex-col gap-[2px] items-center uppercase text-[#8a8b8e] text-[10px] font-semibold">
                            <AiOutlineHome size="28px" color="#8a8b8e" />
                            <span className="">Home</span>
                        </Link>
                    </div>
                    <div className="flex-[1] px-[5px]">
                        <button type="button" onClick={() => setOpen(!open)} className="flex w-full flex-col gap-[2px] items-center uppercase text-[#8a8b8e] text-[10px] font-semibold">
                            <FiSearch size="28px" color="#8a8b8e" />
                            <span className="">Search</span>
                        </button>
                    </div>
                    <div className="flex-[1] px-[5px]">
                        <div className="flex flex-col gap-[2px] items-center uppercase text-[#8a8b8e] text-[10px] font-semibold">
                            <LanguageSwitcher position="top">
                                <button type='button' className='block'>
                                    <MdLanguage size="28px" color="#8a8b8e" />
                                </button>
                            </LanguageSwitcher>
                            <span className="">Language</span>
                        </div>
                    </div>
                    <div className="flex-[1] px-[5px]">
                        <Link href={url()} className="flex flex-col gap-[2px] items-center uppercase text-[#8a8b8e] text-[10px] font-semibold">
                            <PiUser size="28px" color="#8a8b8e" />
                            <span className="">Account</span>
                        </Link>
                    </div>
                </div>
            </div>
            {open && <MobileSearch close={closeSearch} />}
        </>
    )
}