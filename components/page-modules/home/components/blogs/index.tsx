import { LangType } from "@/global/types/lang.type";
import { BlogsContainer } from "@/page-modules/home/components/blogs/container/blogs.container";
import { getDictionary } from "@/utils/dictionary";

type Props = {
    lang: LangType;
}

export async function Blogs(props: Props) {
    const { lang } = props;
    const { latest_news } = await getDictionary(lang);

    return (
        <BlogsContainer lang={lang} {...latest_news} />
    )
};