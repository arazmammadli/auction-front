// export interface IBlog extends IBlogs {
//   content: string;
// }  

export interface IBlog {
    title: string;
    image: string;
    category_slug: string;
    category_name: string;
    slug: string;
    created_date: string;
    modified_date: string;
    content:string;
}