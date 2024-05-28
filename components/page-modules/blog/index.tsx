import { Container } from "@/components/common/container"
import { BlogContainer } from "@/components/page-modules/blog/container/blog.container";
import { LangType } from "@/global/types/lang.type";
import { getDictionary } from "@/utils/dictionary";

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
    lang: LangType;
}

export async function Blog(props: Props) {
    const { searchParams, lang } = props;
    const { blog} = await getDictionary(lang);

    return (
        <div className="w-full py-10 lg:py-[72px]">
            <Container>
                <BlogContainer searchParams={searchParams} noBlogTxt={blog.no_blog_txt} />
            </Container>
        </div>
    )
}