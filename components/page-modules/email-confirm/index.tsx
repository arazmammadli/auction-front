import { Container } from "@/components/common/container";
import { EmailConfirmContainer } from "./container/email-confirm.container";
import { LangType } from "@/global/types/lang.type";
import { getDictionary } from "@/utils/dictionary";

type Props = {
    lang: LangType;
};

export async function EmailConfirm(props: Props) {
    const { lang } = props;
    const { email_confirm } = await getDictionary(lang);

    return (
        <div className="w-full py-[100px]">
            <Container>
                <EmailConfirmContainer {...email_confirm} />
            </Container>
        </div>
    )
}