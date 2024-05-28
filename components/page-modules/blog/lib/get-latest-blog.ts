import { blogRequest } from "../data/blog.request";

export async function getLatestBlog(limit = 3) {
    const response = await blogRequest.getBlogs({ limit: 10, offset: 0 });
    const sortedPosts = response.list.sort((a, b) => +b.created_date - +a.created_date);
    const latestPosts = sortedPosts.slice(0, limit);
    return latestPosts;
};