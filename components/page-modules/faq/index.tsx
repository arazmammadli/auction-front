import { FaqContent } from "@/components/page-modules/faq/components/faq.content";
import { Container } from "@/components/common/container";
import { getDictionary } from "@/utils/dictionary";
import { LangType } from "@/global/types/lang.type";

type Props = {
    lang: LangType;
};

export async function Faq(props: Props) {
    const { lang } = props;
    const { faq } = await getDictionary(lang);

    return (
        <div className="w-full py-[4.5rem]">
            <Container>
                <FaqContent head={faq.head} data={faq.contents} />
            </Container>
        </div>
    )
}