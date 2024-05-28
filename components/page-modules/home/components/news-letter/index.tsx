import { ClientOnly } from "@/components/layout/client-only";
import { LangType } from "@/global/types/lang.type";
import { NewsLetterContainer } from "@/page-modules/home/components/news-letter/container/news-letter.container";
import { getDictionary } from "@/utils/dictionary";

type Props = {
    lang: LangType;
}

export async function NewsLetter(props: Props) {
    const { lang } = props;
    const { news_letter } = await getDictionary(lang);
    return (
        <ClientOnly>
            <NewsLetterContainer {...news_letter} />
        </ClientOnly>
    )
}