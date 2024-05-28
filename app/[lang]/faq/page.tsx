import { Faq } from "@/components/page-modules/faq/index";
import { Locale } from "@/config/i18n.config";

export default function Page(
    {
        params: { lang }
    }: {
        params: { lang: Locale }
    }
) {
    return <Faq lang={lang} />
}