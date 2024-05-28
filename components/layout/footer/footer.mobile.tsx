import { MobileFooter } from "@/components/layout/footer/components/mobile/mobile.main";
import { LangType } from "@/global/types/lang.type";
import { getDictionary } from "@/utils/dictionary";

type Props = {
    lang: LangType;
}

export default async function FooterMobile(props: Props) {
    const { lang } = props;
    const { footer: { app, contact, footer_menu } } = await getDictionary(lang);
    return (
        <>
            <MobileFooter footerMenu={footer_menu} appData={app} contact={contact} />
        </>
    )
}