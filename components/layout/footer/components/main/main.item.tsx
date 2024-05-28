"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { GoArrowRight } from "react-icons/go"

type IMainItemProps = {
    head: string,
    contents: {
        id: number;
        head: string;
        path: string;
    }[]
}

export function FooterMainItem({ head, contents }: IMainItemProps) {
    // hooks
    const params = useParams();
    const lang = params.lang;

    return (
        <div className="flex flex-col gap-3 min-w-[12.5rem]">
            <h1 className="text-base font-medium leading-6 text-white uppercase">{head}</h1>
            <div className="flex flex-col">
                {
                    contents.map((content) => (
                        <Link key={content.id} href={`/${lang}${content.path}`} className="py-[6px]">
                            <span className="text-sm font-medium leading-5 text-[#929fa5]">{content.head}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}