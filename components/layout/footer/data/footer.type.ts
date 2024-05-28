export type FooterMenuType = {
    id: number;
    head: string;
    contents: FooterMenuContentType[]
};

export type FooterMenuContentType = {
    id: number;
    path: string;
    head: string;
};
