import Link from "next/link";
import { PiArrowRightBold } from "react-icons/pi";

type Props = {
    type: "link" | "button"
    href?: string;
    text: string;
    color:string
}

export function DashboardLink({ href, text, type,color }: Props) {
    return type === "link" ? <Link href={href as string} className={`flex items-center ${color} gap-2 py-[6px]`}>
        <span className="text-sm font-semibold leading-5">{text}</span>
        <PiArrowRightBold size="20px" />
    </Link> : <button type="button" className={`flex items-center ${color} gap-2 py-[6px]`}>
        <span className="text-sm font-semibold leading-5">{text}</span>
        <PiArrowRightBold size="20px" />
    </button>
}