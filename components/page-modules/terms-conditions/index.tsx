import { Container } from "@/components/common/container";
import { TermsConditionsContent } from "./components/terms-conditions.content";
import { getDictionary } from "@/utils/dictionary";
import { LangType } from "@/global/types/lang.type";

type Props = {
    lang: LangType;
};


export async function TermsConditions(props: Props) {
    const { lang } = props;
    const { terms_conditions } = await getDictionary(lang);
    return (
        <div className="w-full py-[72px]">
            <Container>
                <TermsConditionsContent data={terms_conditions} />
            </Container>
        </div>
    )
}