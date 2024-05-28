import { Blog } from "@/components/page-modules/blog";
import { Locale } from "@/config/i18n.config";

export default function Page(
    {
        searchParams,
        params: { lang }

    }: {
        searchParams: { [key: string]: string | string[] | undefined },
        params: { lang: Locale }
    }) {
    return <Blog searchParams={searchParams} lang={lang} />
};