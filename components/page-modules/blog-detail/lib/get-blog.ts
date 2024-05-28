import { blogDetailRequest } from "../data/blog-detail.request";

export async function getBlog(slug: string) {
    const blog = await blogDetailRequest.getBlog(slug);
    return blog;
}