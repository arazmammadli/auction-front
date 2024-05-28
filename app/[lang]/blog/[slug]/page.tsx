import { BlogDetail } from "@/components/page-modules/blog-detail";
import { LangType } from "@/global/types/lang.type";
import {getBlog} from "@/page-modules/blog-detail/lib/get-blog";

type ParamType = {
    slug: string;
    lang:LangType;
};

type Props = {
    params: ParamType;
};
// @ts-ignore
export async function generateMetadata({params}:{
    params: {
        slug: string;
    };
}) {

    try {
        const post = await getBlog(params.slug);
        if(!post) {
            return {
                title:"Not Found",
                description:"The page you are looking for does not exist."
            };
        }

        return {
            title:post.title,
            description:post.content.toString().slice(0,50),
            alternates:{
                canonical:`/blog/${post.slug}`
            }
        };
    } catch (err) {
        return {
            title:"Not Found",
            description:"The page you are looking for does not exist."
        };
    }
}

export default function Page(props: Props) {
    const { params } = props;
    const { slug } = params;
    return <BlogDetail lang={params.lang} slug={slug} />
}