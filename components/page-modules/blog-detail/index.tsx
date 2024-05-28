import { Container } from "@/components/common/container";
import { BlogDetailContainer } from "@/components/page-modules/blog-detail/container/blog-detail.container";
import { LangType } from "@/global/types/lang.type";

type Props = {
    slug: string;
    lang:LangType;
}

export function BlogDetail(props: Props) {
    const { slug,lang } = props;
    return (
        <div className="w-full py-[72px]">
            <Container>
                <BlogDetailContainer lang={lang} slug={slug} />
            </Container>
        </div>
    )
}