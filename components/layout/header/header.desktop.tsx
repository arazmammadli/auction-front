import { Nav } from "@/components/layout/header/components/nav";
import { Head } from "@/components/layout/header/components/head";
import { MiddleNav } from "@/components/layout/header/components/middle-nav";
import { getDictionary } from "@/utils/dictionary";
import { LangType } from "@/global/types/lang.type";

type Props = {
    lang: LangType;
}

export default async function HeaderDesktop(props: Props) {
    const { lang } = props;
    const { header } = await getDictionary(lang);
    return <>
        <Head data={header.top_header} />
        <MiddleNav inputText={header.input_placeholder} />
        <Nav data={header.nav} />
    </>
}