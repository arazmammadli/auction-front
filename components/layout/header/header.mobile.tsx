import { useGetPublicLang } from "@/global/requests/get-public-lang";
import { MobileHead } from "@/components/layout/header/components/mobile/mobile.head";
import { LangType } from "@/global/types/lang.type";
import { getDictionary } from "@/utils/dictionary";

type Props = {
    lang: LangType;
}

export default async function HeaderMobile(props: Props) {
    const { lang } = props;
    const { header } = await getDictionary(lang);

    return <MobileHead data={header.mobileMenu} />
};