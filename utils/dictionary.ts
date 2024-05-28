import type { Locale } from "@/config/i18n.config";

const dictionaries = {
    en: () => import("@/public/locales/en/translation.json").then((module) => module.default),
    az: () => import("@/public/locales/az/translation.json").then((module) => module.default),
    ru: () => import("@/public/locales/ru/translation.json").then((module) => module.default),
    tr: () => import("@/public/locales/tr/translation.json").then((module) => module.default)
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
