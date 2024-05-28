import { blogRequest } from "@/components/page-modules/blog/data/blog.request";

export async function getBlogs(limit = 6) {
    const response = await blogRequest.getBlogs({ limit, offset: 0, categoriesQuery: "", searchQuery: "" });
    return response;
};