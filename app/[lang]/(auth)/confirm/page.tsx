import { EmailConfirm } from "@/components/page-modules/email-confirm";
import { Locale } from "@/config/i18n.config";

export default function Page(
    {
        params: { lang }
    }: {
        params: { lang: Locale }
    }
) {
    return <EmailConfirm lang={lang} />
};