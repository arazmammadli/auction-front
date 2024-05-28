"use client";
import { Logo } from "@/components/layout/header/components/mobile/drawer.logo";
import { MobileDrawer } from "@/components/layout/header/components/mobile/mobile.drawer";
import { useMemo, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IMenus, MenuType } from "../../data/header.type";
import { mobileMenuIcons } from "../../data/header.repository";
import { ClientOnly } from "@/components/layout/client-only";
import dynamic from "next/dynamic";
import { Notification } from "@/components/layout/notification";

const Clock = dynamic(() => import("@/components/common/clock"), { ssr: false });

type Props = {
    data: MenuType[];
}

// moobile header
export function MobileHead(props: Props) {
    const [open, setOpen] = useState(false);
    const { data } = props;
    const now = new Date();

    const combinesMenus = () => {
        return data.reduce((result: IMenus[], menu: MenuType, index: number): IMenus[] => {
            result.push({ ...menu, icon: mobileMenuIcons[index].icon, segment: mobileMenuIcons[index].segment });
            return result;
        }, []);
    };

    const menus = useMemo(combinesMenus, [data]);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="block lg:hidden w-full bg-[#1B6392] border-b border-solid border-[#E4E7E9]">
                <div className="px-3 w-full">
                    <div className="flex flex-row items-center justify-between min-h-[60px]">
                        <div className="w-max">
                            <div className="w-full">
                                <Logo />
                            </div>
                        </div>
                        <Clock time={now.getTime()} />
                        <div className="flex items-center gap-4 w-max">
                            <ClientOnly>
                                <Notification position="bottom" />
                            </ClientOnly>
                            <button type="button" onClick={showDrawer}>
                                <AiOutlineMenu size="24px" color="#fff" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ClientOnly>
                <MobileDrawer menus={menus} open={open} onClose={onClose} />
            </ClientOnly>
        </>
    )
}