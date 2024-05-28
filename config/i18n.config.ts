export const i18n = {
    defaultLocale: "az",
    fallback: "az",
    locales: ["en", "az", "ru", "tr"]
} as const;

export type Locale = (typeof i18n)["locales"][number];