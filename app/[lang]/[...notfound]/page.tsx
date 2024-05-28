import { Error404 } from "@/components/page-modules/404";
import { Locale } from "@/config/i18n.config";

type Props = {
    params: {
        lang: Locale
    };
};

export default function Page({ params }: Props) {

    return <Error404 lang={params.lang} />;
};