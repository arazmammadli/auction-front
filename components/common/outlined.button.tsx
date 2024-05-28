"use client";
import { LangType } from "@/global/types/lang.type";
import classNames from "classnames";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

type Props = {
    href?: string;
    children: React.ReactNode;
    borderClr: string;
    type: "link" | "button"
}

export function OutlinedButton({ href, children, borderClr, type }: Props) {
    const params = useParams();
    const lang = params.lang as LangType;
    return (
        <>
            {
                type === "link" ? <Link href={`/${lang}${href as string}`} locale={lang} as={`/${lang}${href}`} className={classNames("flex justify-center gap-2 px-3 md:px-6 bg-white items-center rounded-sm border-2 border-solid", {
                    [borderClr]: borderClr || "border-[#FA8232]"
                })}>
                    {children}
                </Link> : <button type="button" className={classNames("flex justify-center gap-2 px-3 md:px-6 bg-white items-center rounded-sm border-2 border-solid", {
                    [borderClr]: borderClr || "border-[#FA8232]"
                })}>
                    {children}
                </button>
            }
        </>
    )
}