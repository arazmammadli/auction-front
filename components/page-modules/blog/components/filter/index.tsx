"use client";
import { FilterContent } from "@/components/page-modules/blog/components/filter/content";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback, useRef } from "react";
import { IBlogs, ICategory } from "../../data/blog.type";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { getDateForUTCLocal } from '@/utils/date';
import { useGetPublicLang } from "@/global/requests/get-public-lang";
import { LangType } from "@/global/types/lang.type";

// regex .replace(/ /g, "-")

type Props = {
    categories: ICategory[];
    blogs: IBlogs[];
}

export function BlogFilter(props: Props) {

    // props object desctructuring
    const { categories, blogs } = props;

    // hooks
    const categoryParams = useSearchParams();
    const initialRender = useRef(true);
    const [value, setValue] = useState<string>(
        (categoryParams ? categoryParams.get("CategorySlug") : "") || ""
    );
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const lang = params.lang as LangType;
    const { data: langData } = useGetPublicLang();

    const handleCategory = useCallback(
        (queryValue: string) => {
            let params = new URLSearchParams(window.location.search);
            if (queryValue.length > 0) {
                params.set("CategorySlug", queryValue);
            } else {
                params.delete("CategorySlug");
            }

            router.replace(`${pathname}?${params.toString()}`);
        }, [router, pathname]
    );

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }

        if (!value) {
            router.push(`/blog`);
        } else {
            handleCategory(value);
        }
    }, [value]);

    return (
        <div className="w-full flex flex-col gap-6">
            <FilterContent head={langData ? langData.blog.category_filter_head : ""}>
                <div className="flex flex-col gap-3">
                    {
                        categories.map((category) => (
                            <div key={category.slug} className="flex flex-row gap-2 items-center">
                                <input onChange={(e) => setValue(e.target.value)} type="radio" className="w-5 h-5 border border-solid border-[#C9CFD2] focus:ring-0 focus:ring-offset-0 checked:text-[#FA8232]" value={category.slug} name="category-filter" id={category.slug} />
                                <label htmlFor={category.slug} className="text-sm cursor-pointer font-medium text-[#475156]">{category.name}</label>
                            </div>
                        ))
                    }
                </div>
            </FilterContent>
            <FilterContent head={langData ? langData.blog.latest_blog_head : ""}>
                <div className="flex flex-col gap-6">
                    {
                        blogs.map((blog) => {
                            const createdAt = getDateForUTCLocal(blog.created_date, lang);
                            return (
                                <Link href={`/blog/${blog.slug}`} key={blog.slug} className="flex flex-row gap-4 items-center">
                                    <div className="relative w-[8rem] h-[75px]">
                                        <Image src={blog.image} className="min-w-max min-h-max" style={{objectFit:"cover"}} fill alt={blog.title} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-sm font-medium leading-5 text-[#191c1f]">{blog.title}</h3>
                                        <span className="text-sm font-normal leading-5 text-[#77878F]">{createdAt}</span>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </FilterContent>
        </div>
    )
};