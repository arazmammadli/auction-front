import { BlogCard } from "@/components/common/blog.card";
import { getBlogs } from "../lib/get-blogs"
import { CustomLink } from "@/components/common/link";
import { PiArrowRight } from "react-icons/pi";
import { getDateForUTCLocal } from "@/utils/date";
import { LangType } from "@/global/types/lang.type";

type Props = {
    head: string;
    btnTxt: string;
    lang: LangType;
}

export async function BlogsContainer(props: Props) {
    const { head, btnTxt, lang } = props;
    const { list: blogs } = await getBlogs();

    return (
        <div className="w-full">
            <div className="text-center mb-10">
                <h1 className="text-center text-[32px] font-semibold leading-10 text-[#101c1f]">{head}</h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
                {
                    blogs.map((blog) => {
                        const createdAt = getDateForUTCLocal(blog.created_date, lang);
                        return (
                            <BlogCard key={blog.slug} datePostCreated={createdAt} {...blog} />
                        )
                    })
                }
            </div>
            <div className="w-full flex justify-center mt-5">
                <CustomLink href="/blog" width="w-fit">
                    <span className="uppercase text-base font-bold leading-[56px] text-white">{btnTxt}</span>
                    <PiArrowRight size="24px" color="#fff" />
                </CustomLink>
            </div>
        </div>
    )
};