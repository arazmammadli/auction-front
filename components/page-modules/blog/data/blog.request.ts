import { requestInstanceServer } from '@/config/request';
import { IBlogResponse, ICategory } from "@/components/page-modules/blog/data/blog.type";


export const blogRequest = {

    getBlogs: (
        { searchQuery = "", limit = 4, categoriesQuery = "", offset = 0 }: {
            searchQuery?: string;
            categoriesQuery?: string;
            limit?: number;
            offset?: number;
        }
    ) => {
        return requestInstanceServer.get<IBlogResponse>(`/Blogs?Limit=${limit}&Offset=${offset}&CategorySlug=${categoriesQuery}&BlogTitle=${searchQuery}`,{
            next:{revalidate:480}
        })
    },

    getCategories: () => {
        return requestInstanceServer.get<ICategory[]>("/Blogs/Categories")
    },

}