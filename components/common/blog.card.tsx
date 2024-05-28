"use client"
import Image from "next/image";
import { FaRegUserCircle, FaRegCommentDots } from "react-icons/fa";
import { IBlogs } from "../page-modules/blog/data/blog.type";
import { getDateForUTCLocal } from '@/utils/date';
import Link from "next/link";
import { useParams } from "next/navigation";
import { LangType } from "@/global/types/lang.type";

type Props = {
    datePostCreated: string;
} & IBlogs

export function BlogCard(props: Props) {
    const { category_name, category_slug, created_date, image, modified_date,datePostCreated, slug, title } = props;

    // hooks
    const params = useParams();
    const lang = params.lang as LangType;

    return (
        <Link
            href={`/${lang}/blog/${slug}`}
            locale={lang}
            as={`/${lang}/blog/${slug}`}
            className="block w-full p-4 rounded-xl bg-white border border-solid border-[#E8E8EA]"
        >
            <div className="mb-4">
                <Image src={image} className="w-full object-cover h-[15.5rem] rounded-md" width="360" height="248" alt="Blog" />
            </div>
            <div className="flex flex-col gap-5">
                <div className="mb-4">
                    <h1 className="text-2xl font-semibold leading-7 text-[#191c1f]">{title}</h1>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row items-center gap-2">
                        <FaRegUserCircle color="#FA8232" size="36px" />
                        <span className="text-sm leading-6 font-medium text-[#97989F]">Admin</span>
                    </div>
                    <p className="text-sm leading-6 font-normal text-[#97989F]">{datePostCreated}</p>
                </div>
            </div>
        </Link>
    )
}