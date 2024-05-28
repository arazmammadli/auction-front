"use client";
import {useMemo, use} from "react";
import {FeeaturesItem} from "@/components/page-modules/home/components/features/components/features.item";
import {featuresIcons} from "@/components/page-modules/home/data/home.repository";
import {FeatureType, IFeatures} from "@/page-modules/home/data/home.type";
import {getDictionary} from "@/utils/dictionary";
import {useParams} from "next/navigation";
import {useGetPublicLang} from "@/global/requests/get-public-lang";

type Props = {
    data: FeatureType[];
};

export function FeaturesContent(props: Props) {

    const {data} = props;

    const combinedArrays = () => {
        return data.reduce((result: IFeatures[], feature: FeatureType, index: number): IFeatures[] => {
            result.push({...feature, icon: featuresIcons[index]});
            return result;
        }, []);
    };

    const features = useMemo(combinedArrays, [data]);

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 p-4 rounded-md border border-solid border-[#E4E7E9] bg-white">
            {
                features && features.map((fd) => (
                    <FeeaturesItem key={fd.id} {...fd} />
                ))
            }
        </div>
    )
};