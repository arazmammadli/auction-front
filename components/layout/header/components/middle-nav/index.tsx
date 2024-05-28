"use client"
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { Search } from "@/components/layout/header/components/middle-nav/nav.search";
import { LoginDropdown } from "@/components/page-modules/auth/components/login.dropdown";
import { useAuthStore } from "@/components/page-modules/auth/data/auth.store";
import { Notification } from "@/components/layout/notification"
import { ClientOnly } from "@/components/layout/client-only";
import { useParams } from "next/navigation";
import { LangType } from "@/global/types/lang.type";

type Props = {
    inputText: string;
};

export function MiddleNav(props: Props) {
    const { inputText } = props;

    // hooks
    const authState = useAuthStore((state) => ({
        accessToken: state.auth.accessToken
    }));
    const params = useParams();
    const lang = params.lang as LangType;

    return (
        <div className="hidden lg:block w-full bg-[#1B6392] py-5">
            <Container>
                <div className="flex justify-between">
                    <div className="">
                        <Link href={`/${lang}`} as={`/${lang}`} locale={lang} className="block">
                            <Image src="/assets/images/Logo.png" className="object-cover max-h-[50px]" width="200" height="50" alt="Logo" />
                        </Link>
                    </div>
                    <Search text={inputText} />
                    <div className="flex flex-row items-center gap-6">
                        {
                            authState.accessToken && <ClientOnly><Notification position="bottomRight" /></ClientOnly>
                        }
                        <LoginDropdown />
                    </div>
                </div>
            </Container>
        </div>
    )
}