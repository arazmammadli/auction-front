import Link from "next/link";
import classNames from "classnames";
import { useParams } from "next/navigation";
import { LangType } from "@/global/types/lang.type";

type Props = {
    icon: React.ReactNode;
    path: string;
    head: string;
    active: boolean;
}

export function SidebarContentItem({ head, icon, path, active }: Props) {

    // hooks
    const params = useParams();
    const lang = params.lang as LangType;

    return (
        <Link href={`/${lang}${path}`} locale={lang} as={`/${lang}${path}`} className={classNames("flex flex-row text-[#5F6C72] gap-3 items-center py-[10px] pl-6", {
            ["bg-[#FA8232] text-white"]: active
        })}>
            {icon}
            <h3 className="text-sm font-normal leading-5">{head}</h3>
        </Link>
    )
}