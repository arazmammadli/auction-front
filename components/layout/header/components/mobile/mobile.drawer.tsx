"use client";
import { CommonDrawer } from "@/components/common/drawer";
import { Logo } from "@/components/layout/header/components/mobile/drawer.logo";
import { useSelectedLayoutSegment } from "next/navigation";
import { IMenus } from "@/components/layout/header/data/header.type";
import { MenuItem } from "@/components/layout/header/components/nav/menu.item";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Props = {
    open: boolean;
    onClose: () => void;
    menus: IMenus[];
}

export function MobileDrawer(props: Props) {
    const { onClose, open, menus } = props;
    const segment = useSelectedLayoutSegment();
    const pathname = usePathname();

    useEffect(() => {
        if (open) {
            onClose();
        };
    }, [pathname]);

    return (
        <>
            <CommonDrawer bgColor="#1B6392" width="w-[320px_!important]" logo={<Logo />} onClose={onClose} open={open}>
                <div className="w-full h-full">
                    <div className="w-full h-[calc(100%-70px)] overflow-y-auto">
                        <nav className="w-full">
                            <ul className="w-full flex flex-col gap-5 py-3">
                                {
                                    menus.map((menu) => (
                                        <li key={menu.id}>
                                            <MenuItem key={menu.id} {...menu} active={segment === menu.segment} />
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </CommonDrawer>
        </>
    )
};