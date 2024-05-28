import { Container } from "@/components/common/container";
import { PrivacyPolicyContent } from "./components/privacy-policy.content";
import { getDictionary } from "@/utils/dictionary";
import { LangType } from "@/global/types/lang.type";

type Props = {
    lang: LangType;
};

export async function PrivacyPolicy(props: Props) {
    const { lang } = props;
    const { privacy_policy } = await getDictionary(lang);

    return <div className="w-full py-[72px]">
        <Container>
            <PrivacyPolicyContent data={privacy_policy} />
        </Container>
    </div>
}