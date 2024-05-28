import Link from "next/link"
import { PiArrowRight } from "react-icons/pi";

type Props = {
    href: string;
    text: string;
    color: string;
}

export function DashboardLink({ href, text, color }: Props) {
    return (
        <Link href={href} className={`flex items-center gap-2 ${color}`}>
            <span className="text-sm font-semibold leading-5">{text}</span>
            <PiArrowRight size="20px" />
        </Link>
    )
}