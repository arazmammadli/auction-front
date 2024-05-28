"use client";
import Link from "next/link";
import { socialIcons } from "@/components/layout/header/data/header.repository";
import { Container } from "@/components/common/container";
import { MenuType } from "../../data/header.type";
import { MdKeyboardArrowDown } from 'react-icons/md';
import dynamic from "next/dynamic";
import { LanguageSwitcher } from "@/components/layout/shared/lang.switcher";
import { useParams } from "next/navigation";
import { LangType } from "@/global/types/lang.type";

const Clock = dynamic(() => import("@/components/common/clock"), { ssr: false });

type Props = {
    data: {
        menu: MenuType[];
        right_text: string;
    };
};

export function Head(props: Props) {
    const { data: { menu, right_text } } = props;
    const now = new Date();
    const params = useParams();
    const lang = params.lang as LangType;

    return (
        <div className="hidden lg:block w-full bg-[#1B6392] py-3 shadow-[0px_-1px_0px_0px_rgba(255,255,255,0.16)_inset]">
            <Container>
                <div className="flex justify-between text-white">
                    <div className="flex flex-row items-center gap-3">
                        {
                            menu.map((item) => (
                                <Link key={item.id} href={`/${lang}${item.path}`} locale={lang} as={`/${lang}${item.path}`} className="text-white transition-colors duration-300 hover:text-[#FA8232]">
                                    <span className="text-sm leading-5 font-normal">{item.head}</span>
                                </Link>
                            ))
                        }
                    </div>
                    <Clock time={now.getTime()} />
                    <div className="flex flex-row items-center gap-6">
                        <div className="flex flex-row items-center gap-3">
                            <p className="text-sm text-white font-normal leading-5">{right_text}:</p>
                            <div className="flex flew-row items-center gap-3">
                                {
                                    socialIcons.map((icon) => (
                                        <Link key={icon.id} href={icon.href} className="text-white" target="_blank">
                                            {icon.icon}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="w-[1px] h-full bg-white opacity-20"></div>
                        <div className="lang relative">
                            <LanguageSwitcher position="bottomRight">
                                <div className='flex gap-[2px] items-center cursor-pointer'>
                                    {lang.toLocaleUpperCase()}
                                    <MdKeyboardArrowDown size="18px" />
                                </div>
                            </LanguageSwitcher>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}