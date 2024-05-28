export interface ICategories {
    label: string;
    id: string;
    href: string;
    children?: ISubCategories[];
};

export interface ISubCategories {
    key: string;
    label: string;
};

export type MenuType = Omit<IMenus, "icon" | "segment">;

export interface IMenus {
    id: number;
    head: string;
    path: string;
    icon: React.ReactNode;
    segment: string | null;
};