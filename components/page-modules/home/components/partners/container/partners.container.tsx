"use client";
import {IPartners} from "@/page-modules/home/components/partners/data/partners.type";
import dynamic from "next/dynamic";

type Props = {
    partners:IPartners[];
    head:string;
    desc:string
};

const ImagePreview = dynamic(() => import("@/components/common/image"),{
    ssr:false
})
export function PartnersContainer(props:Props) {
    const {partners,desc,head} = props;

    return (
        <div className="w-full">
            <div className="w-full text-center">
                <h2 className="text-center text-[32px] font-semibold leading-10 text-[#101c1f] mb-2">{head}</h2>
                <p className="text-base font-normal md:max-w-[32rem] lg:max-w-[42rem] mx-auto leading-6 text-[#77878f]">{desc}</p>
            </div>
            <div className="grid grid-cols-1 mt-3 md:mt-6 lg:mt-12 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                {
                    partners.map((partner) => (
                        <div key={partner.id} className="flex justify-center items-center transition-colors duration-300 hover:bg-[#e1e4eb] text-center p-8 bg-[#e9ebf0] rounded-[0.25rem]">
                            <ImagePreview coverImg={partner.logo} previewImages={typeof partner.image === "string" ? [partner.image] : partner.image}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}