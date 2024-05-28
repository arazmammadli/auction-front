export interface IBlogResponse {
  list: IBlogs[]
  count: number
}

export interface IBlogs {
  title: string;
  image: string;
  category_slug: string;
  category_name: string;
  slug: string;
  created_date: string;
  modified_date: string;
}

export interface ICategory {
  name: string;
  slug: string;
  created_date: string;
}