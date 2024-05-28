"use client";
import { LangType } from "@/global/types/lang.type";
import Link from "next/link";
import { useParams } from "next/navigation";

type Props = {
    href: string;
    children: React.ReactNode
    width: "w-full" | "w-fit"
}

export function CustomLink({ href, children, width }: Props) {
    const params = useParams();
    const lang = params.lang as LangType;
    return (
        <Link href={`/${lang}${href.includes("/") ? "" : "/"}${href}`} locale={lang} as={`/${lang}${href.includes("/") ? "" : "/"}${href}`} className={`flex ${width} flex-row bg-[#FA8232] items-center rounded-[3px] px-3 md:px-6 gap-3 justify-center`}>
            {children}
        </Link>
    )
};