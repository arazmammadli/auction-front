import { ComingSoon } from "@/components/common/coming-soon";
import { Locale } from "@/config/i18n.config";

export default function Page(
    {
        params: { lang }
    }: {
        params: { lang: Locale }
    }
) {
    return (
        <ComingSoon lang={lang} />
    )
};