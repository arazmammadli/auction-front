import { LangType } from "@/global/types/lang.type";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export function Logo() {

    // hooks
    const params = useParams();
    const lang = params.lang as LangType;
    return (
        <Link href={`/${lang}`} as={`/${lang}`} locale={lang} className="flex flex-row items-center gap-2">
            <Image src="/assets/images/Logo.png" className="object-cover max-h-[50px]" width="100" height="50" alt="Logo" />
        </Link>
    )
}