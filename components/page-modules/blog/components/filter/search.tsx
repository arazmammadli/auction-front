"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback, useTransition, useEffect, useRef } from "react";

import { FiSearch } from "react-icons/fi";
import { BlogFilterDrawer } from "@/components/page-modules/blog/components/filter/filter.drawer";
import { useDebounce } from "@/global/hooks/use-debounce";
import { IoFilter } from "react-icons/io5";
import { useGetPublicLang } from "@/global/requests/get-public-lang";

export function BlogSearch() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const initialRender = useRef(true);
    const [text, setText] = useState(
        (searchParams ? searchParams.get("BlogTitle") : "") || ""
    )
    const query = useDebounce(text, 750);
    const [isPending, startTransition] = useTransition();
    const [open, setOpen] = useState(false);
    const { data: langData } = useGetPublicLang();

    const closeDrawer = () => {
        setOpen(false);
    }

    const handleSearchParams = useCallback(
        (debounceValue: string) => {
            let params = new URLSearchParams(window.location.search);
            if (debounceValue.length > 0) {
                params.set("BlogTitle", debounceValue)
            } else {
                params.delete("BlogTitle")
            }

            startTransition(() => {
                router.replace(`${pathname}?${params.toString()}`);
            })
        }, [router, pathname]);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }

        handleSearchParams(query);
    }, [query]);

    return (
        <>
            <div className="w-full flex flex-row items-center justify-between mb-6">
                <div className="w-full mb-4 lg:hidden block" onClick={() => setOpen(true)}>
                    <button type="button" className="flex items-center gap-2">
                        <IoFilter size="24px" color="#191c1f" />
                    </button>
                </div>
                <div className="relative hidden md:block min-w-[26.5rem]">
                    <input type="text" placeholder={langData ? langData.blog.latest_blog_head : ""} value={text} onChange={(e) => setText(e.target.value)} name="blog-search" id="blogSearch" className="py-3 w-full px-4 text-[#77878F] placeholder:text-[#77878F] border border-solid border-[#E4E7E9] focus:ring-0 focus:ring-offset-0 focus:border-[#E4E7E9]" />
                    <div className="absolute top-1/2 -translate-y-1/2 right-4">
                        <FiSearch size="20px" />
                    </div>
                </div>
            </div>
            <BlogFilterDrawer open={open} onClose={closeDrawer} />
        </>
    )
};