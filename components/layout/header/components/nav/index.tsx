"use client";
// navigation
import { useMemo } from "react";
import { Container } from "@/components/common/container";
import { menuIcons } from "@/components/layout/header/data/header.repository";
import { MenuItem } from "@/components/layout/header/components/nav/menu.item";
import { PiPhoneCall } from "react-icons/pi";
import { IMenus, MenuType } from "@/components/layout/header/data/header.type";
import { useSelectedLayoutSegment } from "next/navigation";

type Props = {
    data: MenuType[];
}

export function Nav(props: Props) {
    const { data } = props;
    const segment = useSelectedLayoutSegment();

    const combinesMenus = () => {
        const newMenus = data.reduce((result: IMenus[], menu: MenuType, index: number): IMenus[] => {
            result.push({ ...menu, icon: menuIcons[index].icon, segment: menuIcons[index].segment });
            return result;
        }, []);
        return newMenus;
    };

    const menus = useMemo(combinesMenus, [data]);

    return (
        <div className="w-full hidden lg:block bg-white py-4 shadow-[0px_-1px_0px_0px_#E4E7E9_inset]">
            <Container>
                <div className="flex justify-between">
                    <div className="flex gap-6 items-center">
                        {
                            menus.map((menu) => (
                                <MenuItem key={menu.id} {...menu} active={segment === menu.segment} />
                            ))
                        }
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <PiPhoneCall size="28px" color="#191C1F" />
                        <p className="text-lg font-normal leading-6 text-[#191c1f]">+994 997 10 12 34</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}