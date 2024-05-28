import { Home } from "@/components/page-modules/home";
import { Locale } from "@/config/i18n.config";
import {cookies} from "next/headers";
import {AuthStoreTypes} from "@/page-modules/auth/data/auth.store";

export default function HomePage(
    {
        params: { lang }
    }: {
        params: { lang: Locale }
    }
) {
    return <Home lang={lang} />
}

