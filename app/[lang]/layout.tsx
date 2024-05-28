import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import Providers from "@/provider/react-query.provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileBottomMenu } from "@/components/layout/mobile-bottom-menu";

import Progress from '@/components/common/progress';
import { NODE_ENV } from "@/config/base";
import { Locale } from "@/config/i18n.config";
import { Message } from '@/components/layout/message';
import { seoDescription, seoTitle } from "@/shared/repository";

import './globals.css'
import { PropsWithChildren } from "react";
import Script from "next/script";


const publicSans = Public_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase:new URL("https://mybid.az/"),
    title: NODE_ENV == 'development' ? '🟢 [DEVELOPMENT]' : seoTitle,
    description: seoDescription,
}

type RootLayoutProps = {
    params: { lang: Locale }
} & PropsWithChildren


export default function RootLayout(props: RootLayoutProps) {
    const { params, children } = props;

    return (
        <html lang={params.lang}>
            <head>
                <Script strategy="worker" charSet="UTF-8" src="//web.webpushs.com/js/push/57bf6a77d34c58bc37082c4c95c36662_1.js" async></Script>
                <Script strategy='worker' src="//code.jivosite.com/widget/Oxjt4I38PE" async></Script>
            </head>
            <body className={publicSans.className}>
                <Providers>
                    <header className="sticky top-0 z-[999] md:static md:z-0">
                        <Header lang={params.lang} />
                    </header>
                    <main className='w-full bg-white'>
                        {children}
                        <MobileBottomMenu />
                    </main>
                    <footer>
                        <Footer lang={params.lang} />
                    </footer>
                </Providers>

                <Progress />
                <Message lang={params.lang} />
            </body>
        </html>
    )
};