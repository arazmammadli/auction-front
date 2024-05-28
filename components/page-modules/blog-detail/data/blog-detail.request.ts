import { requestInstanceServer } from '@/config/request';
import { IBlog } from './bog-detail.type';


export const blogDetailRequest = {

    getBlog: (slug: string) => {
        return requestInstanceServer.get<IBlog>(`/Blogs/Get?Slug=${slug}`)
    }

}