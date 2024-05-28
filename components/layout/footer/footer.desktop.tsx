import { FooterMain } from "@/components/layout/footer/components/main/index";
import { Copyright } from "@/components/layout/footer/components/copyright/index";
import { getDictionary } from "@/utils/dictionary";
import { LangType } from "@/global/types/lang.type";

type Props = {
    lang: LangType;
};

export default async function FooterDesktop(props: Props) {
    const { lang } = props;
    const { footer: { copyright, right_text, footer_menu, app, contact } } = await getDictionary(lang);

    return (
        <>
            <FooterMain footerMenu={footer_menu} contact={contact} appData={app} />
            <Copyright copyrightTxt={copyright} productTxt={right_text} />
        </>
    )
}