import { Container } from "@/components/common/container";
import { ErrorContent } from "@/components/page-modules/404/components/error.content";
import { LangType } from "@/global/types/lang.type";
import { getDictionary } from "@/utils/dictionary";

type Props = {
    lang: LangType;
};

export async function Error404(props: Props) {
    const { lang } = props;
    const {not_found,email_confirm} = await getDictionary(lang);

    return (
        <div className="w-full">
            <Container>
                <ErrorContent
                    head={not_found.head}
                     content={not_found.content}
                     back_btn_txt={email_confirm.back_btn_txt}
                     home_btn_txt={email_confirm.home_btn_txt}
                 />
            </Container>
        </div>
    )
}