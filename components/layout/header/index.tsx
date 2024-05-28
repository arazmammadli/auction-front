import { Fragment } from "react";

// hooks
import dynamic from "next/dynamic";
import { LangType } from "@/global/types/lang.type";


const HeaderMobile = dynamic(() => import("@/components/layout/header/header.mobile"));
const HeaderDesktop = dynamic(() => import("@/components/layout/header/header.desktop"));

// components

type Props = {
    lang: LangType;
}

export function Header(props: Props) {

    const { lang } = props;

    return <Fragment>
        <HeaderMobile lang={lang} />

        <HeaderDesktop lang={lang} />
    </Fragment>
}