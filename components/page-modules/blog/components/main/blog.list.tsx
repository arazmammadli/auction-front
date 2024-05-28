"use client";
import { getDateForUTCLocal } from "@/utils/date";
import { IBlogs } from "../../data/blog.type"
import { BlogCard } from "@/components/common/blog.card";
import { useParams } from "next/navigation";
import { LangType } from "@/global/types/lang.type";

type Props = {
    blogs: IBlogs[];
};

export function BlogList(props: Props) {

    // props object destructuring
    const { blogs } = props;

    // hooks
    const params = useParams();
    const lang = params.lang as LangType;

    return (
        <>
            {
                blogs.map((blog) => {
                    const datePostCreated = getDateForUTCLocal(blog.created_date, lang);
                    return (
                        <BlogCard key={blog.slug} datePostCreated={datePostCreated} {...blog} />
                    )
                })
            }
        </>
    )
}