import { PrivacyPolicy } from "@/components/page-modules/privacy-policy";
import { Locale } from "@/config/i18n.config";

export default function Page(
    {
        params: { lang }
    }: {
        params: { lang: Locale }
    }
) {
    return <PrivacyPolicy lang={lang} />
}