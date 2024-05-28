export type FeatureType = Omit<IFeatures, "icon">;

export interface IFeatures {
    id: number;
    head: string;
    desc: string;
    icon: string;
};
