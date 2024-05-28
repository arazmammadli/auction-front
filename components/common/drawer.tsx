import { Drawer } from "antd";
import React from "react";

type Props = {
    open: boolean;
    logo: React.ReactNode;
    width: string;
    onClose: () => void;
    bgColor: string;
    children: React.ReactNode;
}

export function CommonDrawer(props: Props) {
    const { children, logo, onClose, open, width, bgColor } = props;
    return (
        <Drawer rootClassName="z-[999999]" bodyStyle={{ padding: "0px 24px 10px 24px"}} headerStyle={{ backgroundColor: bgColor }} className={`${width}`} title={logo} placement="left" onClose={onClose} open={open}>
            {children}
        </Drawer>
    )
}