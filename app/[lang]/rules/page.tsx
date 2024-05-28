import { TermsConditions } from "@/components/page-modules/terms-conditions";
import { Locale } from "@/config/i18n.config";

export default function Page(
    {
        params: { lang }
    }: {
        params: { lang: Locale }
    }
) {
    return <TermsConditions lang={lang} />
}