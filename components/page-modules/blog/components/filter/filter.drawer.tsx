import { CommonDrawer } from "@/components/common/drawer";
import { BlogFilter } from "@/components/page-modules/blog/components/filter/index";
import { BlogDrawerHead } from "@/components/page-modules/blog/components/filter/blog.drawer.head";
import { useEffect, useState } from "react";
import { IBlogs, ICategory } from "@/page-modules/blog/data/blog.type";
import { getCategories } from "../../lib/actions";
import { getLatestBlog } from "../../lib/get-latest-blog";

type Props = {
    open: boolean;
    onClose: () => void;
}

export function BlogFilterDrawer(props: Props) {
    const { onClose, open } = props;
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [latestBlogs, setLatestBlogs] = useState<IBlogs[]>([]);

    async function getAllCategories() {
        const response = await getCategories();
        if (response.length) {
            setCategories(response);
        }
    };

    async function getLatestPosts() {
        const response = await getLatestBlog();
        if (response.length) {
            setLatestBlogs(response);
        }
    };

    useEffect(() => {
        getAllCategories();
        getLatestPosts();
    }, []);

    return (
        <CommonDrawer bgColor="#fff" width="md:w-[500px_!important]" logo={<BlogDrawerHead />} onClose={onClose} open={open}>
            <div className="w-full pt-[10px]">
                <BlogFilter blogs={latestBlogs} categories={categories} />
            </div>
        </CommonDrawer>
    )
}