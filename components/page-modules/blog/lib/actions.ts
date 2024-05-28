"use server";

import { blogRequest } from "../data/blog.request";

export async function getPosts({ query, categoriesQuery, limit = 4, offset=0 }: {
    query?: string;
    categoriesQuery?: string;
    limit?: number;
    offset?: number;
}) {
    const response = await blogRequest.getBlogs({ searchQuery: query, categoriesQuery, limit, offset });

    return response;
};

export async function getCategories() {
    const response = await blogRequest.getCategories();

    return response;
}