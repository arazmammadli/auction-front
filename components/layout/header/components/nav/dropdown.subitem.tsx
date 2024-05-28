import Link from "next/link"

type Props = {
    label: string;
}

export function MenuDropdownSubItem({ label }: Props) {
    return (
        <li className="py-2 px-4 bg-white text-[#5F6C72] transition-all duration-200 hover:bg-[#F2F4F5] hover:text-[#191c1f]">
            <Link href="/" className="block text-sm font-normal hover:text-[#191c1f] leading-5">
                <span>{label}</span>
            </Link>
        </li>
    )
}