import { AuctionArchive } from "@/components/page-modules/auction-archive";
import { Locale } from "@/config/i18n.config";

export default function Page(
    {
        params: { lang }
    }: {
        params: { lang: Locale }
    }
) {
    return <AuctionArchive lang={lang} />
};