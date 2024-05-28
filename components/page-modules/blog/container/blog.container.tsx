import { BlogFilter } from "@/page-modules/blog/components/filter";
import { BlogSearch } from "@/components/page-modules/blog/components/filter/search";
import { InfiniteScrollBlog } from "./blog.load-more";
import { getCategories, getPosts } from "../lib/actions";
import { getLatestBlog } from "../lib/get-latest-blog";
import { BlogList } from "../components/main/blog.list";


type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
    noBlogTxt:string;
};

export async function BlogContainer(props: Props) {
    const { searchParams,noBlogTxt } = props;

    // get search params
    const searchQuery = searchParams.BlogTitle || "";
    const categoryQuery = searchParams.CategorySlug || "";

    // requests
    const [blogs, categories, latestBlogs] = await Promise.all([
        getPosts({ query: searchQuery as string, categoriesQuery: categoryQuery as string }),
        getCategories(),
        getLatestBlog()
    ]);

    return (
        <>
            <div className="flex flex-row gap-12">
                <div className="lg:flex-[0_0_25rem] lg:max-w-[25rem] hidden lg:block">
                    <BlogFilter blogs={latestBlogs} categories={categories} />
                </div>
                <div className="flex-[0_0_100%] max-w-full lg:flex-[0_0_54.5rem] lg:max-w-[54.5ren]">
                    <BlogSearch />
                    {
                        blogs.count > 0 ? <div className="w-full">
                            <div key={Math.random()} className="grid md:grid-cols-2 gap-3 md:gap-6 grid-cols-1">
                                <BlogList blogs={blogs.list} />
                                <InfiniteScrollBlog blogsCount={blogs.count} initialBlogs={blogs.list} search={searchQuery as string} categoryQuery={categoryQuery} />
                            </div>
                        </div> : <div className="w-full">
                            <h1 className="text-2xl text-[#191C1F] text-center font-semibold">{noBlogTxt}</h1>
                        </div>
                    }
                </div>
            </div>
        </>
    )
};