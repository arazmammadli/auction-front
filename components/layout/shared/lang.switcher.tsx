"use client";
import { Dropdown } from 'antd';
import { locales } from "@/components/layout/header/data/header.repository";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
    position: "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | "top" | "bottom";
    children: React.ReactNode;
}

export function LanguageSwitcher(props: Props) {
    const { children, position } = props;
    const pathname = usePathname();

    const redirectedPathname = (locale: string) => {
        if (!pathname) return "/";

        const segments = pathname.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <Dropdown placement={position} overlayClassName="min-w-[180px] rounded bg-white py-2 border border-solid border-[##E4E7E9] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)]" dropdownRender={() => (
            <div className="w-full flex flex-col gap-0">
                {
                    locales.map((locale) => (
                        <Link
                            key={locale.key}
                            href={redirectedPathname(locale.key)}
                            className="w-full flex items-center gap-3 px-4 py-2"
                        >
                            <Image src={`/assets/images/${locale.img}`} width='24' height='24' alt={locale.name} />
                            <span className="text-sm font-medium leading-5 text-[#5F6C72] uppercase">{locale.key}</span>
                        </Link>
                    ))
                }
            </div>
        )} trigger={['click']}>
            {children}
        </Dropdown>
    )
};
