import { Fragment } from "react";

// hooks
import dynamic from "next/dynamic";
import { LangType } from "@/global/types/lang.type";


const FooterMobile = dynamic(() => import("@/components/layout/footer/footer.mobile"));
const FooterDesktop = dynamic(() => import("@/components/layout/footer/footer.desktop"));

type Props = {
    lang: LangType;
}

export function Footer(props: Props) {

    const { lang } = props;

    return <Fragment>
        <FooterMobile lang={lang} />
        <FooterDesktop lang={lang} />
    </Fragment>
};