"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { IBlogs } from "../data/blog.type";
import Loading from "@/components/common/loading";
import { getPosts } from "../lib/actions";
import useDidMountEffect from "../hooks/use-did-mount.hook";
import { BlogList } from "../components/main/blog.list";
import { BLOG_LIMIT } from "../data/blog.repository";

type Props = {
    search: string | undefined;
    categoryQuery: string | string[];
    initialBlogs: IBlogs[];
    blogsCount: number;
};
export function InfiniteScrollBlog(props: Props) {

    // object destructuring props
    const { search, categoryQuery, initialBlogs, blogsCount } = props;

    // hooks
    const [blogs, blogsSet] = useState<IBlogs[]>([]);
    const [offset, offsetSet] = useState(0);
    const { ref, inView } = useInView();
    const searchQuery = search || "";

    const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));

    const loadMoreBlogs = async () => {
        await delay(2000);
        const nextPage = offset + BLOG_LIMIT;
        const { list: response } = (await getPosts({ query: searchQuery as string, offset: nextPage, categoriesQuery: categoryQuery as string })) ?? [];
        if (response.length) {
            blogsSet((prev) => [
                ...(prev.length ? prev : []),
                ...response
            ]);
            offsetSet(nextPage);
        }
    };

    useDidMountEffect(() => {
        if (inView && blogsCount !== blogs.length + 4) {
            loadMoreBlogs();
        }
    }, [inView]);

    return (
        <>
            <BlogList blogs={blogs} />
            {
                blogsCount > blogs.length + 4 ? <div
                    ref={ref}
                    className="flex justify-center items-center p-4 col-span-1 sm:col-span-2">
                    <Loading />
                </div> : null
            }
        </>
    )
};