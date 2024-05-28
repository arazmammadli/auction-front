"use client";
import { Fragment } from "react";

import dynamic from "next/dynamic";

const BottomMenu = dynamic(() => import("@/components/layout/mobile-bottom-menu/menu.content"));

export function MobileBottomMenu() {

    return <Fragment>
        <BottomMenu /> 
    </Fragment>
}