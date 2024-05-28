import Image from "next/image";

type Props = {
    head: string;
    desc: string;
    icon: string;
}

export function FeeaturesItem({ desc, head, icon }: Props) {
    return (
        <div className="flex bg-white p-4 gap-4 items-center md:justify-start lg:justify-center">
            <Image src={icon} alt={head} />
            <div className="flex flex-col gap-1 items-start">
                <h2 className="text-sm font-medium leading-5 uppercase text-[#191c1f]">{head}</h2>
                <span className="text-sm text-[#5f6c72] font-normal leading-5">{desc}</span>
            </div>
        </div>
    )
}