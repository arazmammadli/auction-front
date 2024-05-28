import Link from "next/link";
import { MenuSubDropdown } from "@/components/layout/header/components/nav/menu.subdropdown"

type Props = {
    label: string;
    href: string;
    children?: {
        key: string;
        label: string;
    }[]
};

export function MenuDropdownItem({ label, children, href }: Props) {
    return (
        <li className="py-2 px-4 bg-white text-[#5F6C72] group transition-all duration-200 hover:bg-[#F2F4F5] hover:text-[#191C1F]">
            <Link href={`/shop/${href}`} className="block dis text-sm hover:text-[#191C1F] font-normal leading-5">
                <span>{label}</span>
            </Link>
            {
                children ? <MenuSubDropdown subdata={children} /> : null
            }
        </li>
    )
}