"use client";
import { socialIcons } from "@/components/layout/header/data/header.repository";
import { LangType } from "@/global/types/lang.type";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

type Props = {
    mybid_llc: string;
    contact_text: string;
    follow_us: string;
}

export function FooterContact(props: Props) {
    const { mybid_llc, contact_text: head, follow_us } = props;
    const params = useParams();
    const lang = params.lang as LangType;
    return (
        <div className="flex flex-col gap-6 max-w-[19.5rem]">
            <div className="">
                <Link href={`/${lang}`} as={`/${lang}`} locale={lang} className="flex flex-row items-center gap-2">
                    <Image src="/assets/images/Logo.png" className="object-cover max-h-[50px]" width="200" height="50" alt="Logo" />
                </Link>
            </div>
            <div className="">
                <div className="flex flex-row items-center gap-3 mb-3">
                    <h3 className="text-sm font-normal leading-5 text-[#77878f]">{mybid_llc}:</h3>
                    <p className="text-white text-lg font-medium leading-6">1506273441</p>
                </div>
                <div className="flex flex-row items-center gap-3 mb-3">
                    <h3 className="text-sm font-normal leading-5 text-[#77878f]">{head}:</h3>
                    <p className="text-white text-lg font-medium leading-6">+994 997 10 12 34</p>
                </div>
                <div className="flex flex-row items-center gap-3">
                    <p className="text-sm text-[#77878f] font-normal leading-5">{follow_us}:</p>
                    <div className="flex flew-row items-center gap-3">
                        {
                            socialIcons.map((icon) => (
                                <Link key={icon.id} href={icon.href} className="text-white" target="_blank">
                                    {icon.icon}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                {/* <p className="text-base font-normal leading-6 text-[#ADB7BC] mb-3">4517 Washington Ave. Manchester, Kentucky 39495</p>
                <Link href="info@kinbo.com" className="text-base text-white font-medium leading-6">
                    <span>info@kinbo.com</span>
                </Link> */}
            </div>
        </div>
    )
}