import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@/config/i18n.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(req: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {};
    req.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    // @ts-ignore
    const locales: string[] = i18n.locales;
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

    const locale = matchLocale(languages, locales, i18n.defaultLocale);
    return locale;
};

export function middleware(req: NextRequest) {

    const pathname = req.nextUrl.pathname;
    const pathnameIsMissingLocale = i18n.locales.every(
        locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    const serializedAuthState = req.cookies.get('auth-storage');
    const parsedAuthObject = serializedAuthState ? JSON.parse(serializedAuthState.value) : null;
    const accessToken = parsedAuthObject?.state?.auth?.accessToken;
    const nextUrl = req.nextUrl.clone();
    const paymentSuccessParams = req.nextUrl.searchParams.get("result");
    const addedCardParams = req.nextUrl.searchParams.get("success");
    const resetParams = req.nextUrl.searchParams.get("token");

    if (pathnameIsMissingLocale) {
        const locale = getLocale(req);
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}${resetParams ? `?token=${resetParams}` : ""}${addedCardParams ? `?success=${addedCardParams}` : ""}${paymentSuccessParams ? `?result=${paymentSuccessParams}` : ""}`,
                req.url
            )
        );
    }


    if (req.url.includes('/user')) {
        if (!accessToken) {
            nextUrl.pathname = '/sign-up';
            return NextResponse.redirect(nextUrl);
        }
        try {
            return NextResponse.next();
        } catch (err) {
            nextUrl.pathname = '/sign-in';
            return NextResponse.redirect(nextUrl);
        }
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|robots.txt|sitemap.xml|logo.png|sw.js|sp-push-worker-fb.js).*)']
};